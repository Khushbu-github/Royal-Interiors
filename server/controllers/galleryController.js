const Gallery = require('../models/Gallery');
const cloudinary = require('../config/cloudinary');
const fs = require('fs');

// @desc    Get all gallery images
// @route   GET /gallery
// @access  Public
const getGallery = async (req, res) => {
    try {
        const images = await Gallery.find().sort({ createdAt: -1 });
        res.json(images);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Upload gallery image
// @route   POST /gallery/upload
// @access  Private (Admin)
const uploadImage = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files uploaded' });
        }

        const uploadedImages = [];

        // Loop through all uploaded files
        for (const file of req.files) {
            try {
                // Upload to Cloudinary
                const result = await cloudinary.uploader.upload(file.path, {
                    folder: 'car-dealership-gallery'
                });

                // Create DB entry
                const image = await Gallery.create({
                    imageUrl: result.secure_url,
                    publicId: result.public_id,
                    title: req.body.title || ''
                });

                uploadedImages.push(image);

                // Remove file from local storage
                fs.unlinkSync(file.path);
            } catch (uploadError) {
                console.error('Individual File Upload Error:', uploadError);
                // Try to remove local file even if upload failed
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
            }
        }

        res.status(201).json(uploadedImages);
    } catch (error) {
        console.error('Gallery Batch Upload Error:', error);
        res.status(500).json({ 
            message: 'Upload failed', 
            error: error.message 
        });
    }
};

// @desc    Delete gallery image
// @route   DELETE /gallery/:id
// @access  Private (Admin)
const deleteImage = async (req, res) => {
    try {
        const image = await Gallery.findById(req.params.id);

        if (!image) {
            return res.status(404).json({ message: 'Image not found' });
        }

        // Delete from Cloudinary
        await cloudinary.uploader.destroy(image.publicId);

        // Delete from DB
        await Gallery.findByIdAndDelete(req.params.id);

        res.json({ message: 'Image removed' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getGallery, uploadImage, deleteImage };

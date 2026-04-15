const express = require('express');
const router = express.Router();
const { getGallery, uploadImage, deleteImage } = require('../controllers/galleryController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/multer');

router.get('/', getGallery);
router.post('/upload', protect, upload.array('images', 5), uploadImage);
router.delete('/:id', protect, deleteImage);

module.exports = router;

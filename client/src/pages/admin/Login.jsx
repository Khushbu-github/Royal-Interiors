import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../utils/axios';
import { Lock, User, Eye, EyeOff } from 'lucide-react';

const Login = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const { data } = await axios.post('/auth/login', formData);
            localStorage.setItem('token', data.token);
            navigate('/admin/dashboard');
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed. Please check credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-transparent flex flex-col justify-center pt-28 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="mx-auto h-20 w-20 bg-[#C5A059] rounded-2xl flex items-center justify-center shadow-[0_15px_40px_rgba(197,160,89,0.3)] transform hover:rotate-6 transition-transform duration-500">
                    <Lock className="h-10 w-10 text-[#1A1A1A]" />
                </div>
                <h2 className="mt-8 text-center text-4xl font-black text-[#FAF9F6] tracking-tight uppercase">Admin <span className="gold-text-gradient">Entrance</span></h2>
                <p className="mt-3 text-center text-[10px] font-black tracking-[0.4em] text-stone/40 uppercase">
                    Secured Access • Portfolio Management
                </p>
            </div>


            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-[#2C2C2B] border border-[#C5A059]/10 py-10 px-8 shadow-2xl sm:rounded-3xl sm:px-12">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-400/10 border-l-4 border-red-500 text-red-500 p-4 text-[10px] font-black uppercase tracking-widest" role="alert">
                                <p>{error}</p>
                            </div>
                        )}

                        <div>
                            <label className="block text-[10px] font-black text-stone/50 uppercase tracking-[0.3em] mb-3">Username</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <User className="h-4 w-4 text-[#C5A059]" />
                                </div>
                                <input
                                    type="text"
                                    required
                                    className="block w-full pl-12 pr-4 py-4 border border-[#C5A059]/15 bg-[#1A1A1A] text-[#FAF9F6] rounded-xl focus:outline-none focus:border-[#C5A059]/60 sm:text-sm transition-all placeholder-stone/20"
                                    placeholder="Enter username"
                                    value={formData.username}
                                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                                />
                            </div>
                        </div>


                        <div>
                            <label className="block text-[10px] font-black text-stone/50 uppercase tracking-[0.3em] mb-3">Secret Key</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <Lock className="h-4 w-4 text-[#C5A059]" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="block w-full pl-12 pr-12 py-4 border border-[#C5A059]/15 bg-[#1A1A1A] text-[#FAF9F6] rounded-xl focus:outline-none focus:border-[#C5A059]/60 sm:text-sm transition-all placeholder-stone/20"
                                    placeholder="••••••••"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 pr-4 flex items-center"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-4 w-4 text-stone/30 hover:text-[#C5A059] transition-colors" />
                                    ) : (
                                        <Eye className="h-4 w-4 text-stone/30 hover:text-[#C5A059] transition-colors" />
                                    )}
                                </button>
                            </div>
                        </div>


                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`w-full flex justify-center py-4 px-8 border border-transparent rounded-full shadow-2xl text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1A] bg-[#C5A059] hover:bg-[#FAF9F6] transition-all focus:outline-none ${loading ? 'opacity-75 cursor-not-allowed' : ''}`}
                            >
                                {loading ? 'Authorizing...' : 'Authorize Access'}
                            </button>
                        </div>

                        {/* Temporary Debug Registration Link */}
                        <div className="pt-4 text-center border-t border-[#C5A059]/5 mt-4">
                            <p className="text-[8px] text-stone/30 uppercase tracking-[0.2em] mb-2">Debug Mode</p>
                            <button 
                                type="button" 
                                onClick={async () => {
                                    if(window.confirm('Temporarily create a new admin with current credentials?')) {
                                        try {
                                            setLoading(true);
                                            await axios.post('/auth/register', formData);
                                            alert('Admin created successfully! You can now log in.');
                                        } catch (err) {
                                            alert(err.response?.data?.message || 'Registration failed');
                                        } finally {
                                            setLoading(false);
                                        }
                                    }
                                }}
                                className="text-[#C5A059]/40 hover:text-[#C5A059] text-[9px] font-black uppercase tracking-widest transition-colors"
                            >
                                Force Register Current Credentials
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};
export default Login;

// components/ProfileManagement.js
import React, { useState, useEffect } from 'react';
import { apiGet, apiPost } from '../utils/apiService';

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    address: '',
    phone: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  // Fetch profile data
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await apiGet('/profile'); // Endpoint to fetch user profile
        setProfile({
          address: data.address || '',
          phone: data.phone || '',
          image: data.image || null,
        });
        setPreview(data.image || null);
      } catch (err) {
        setError('Failed to fetch profile data.');
      }
    };
    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit updated profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('address', profile.address);
      formData.append('phone', profile.phone);
      if (profile.image) {
        formData.append('image', profile.image);
      }

      await apiPost('/profile/update', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Manage Profile</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={profile.address}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Your Physical Address"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Your Phone Number"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Profile Image</label>
          <input type="file" onChange={handleImageChange} className="w-full" />
          {preview && (
            <img
              src={preview}
              alt="Profile Preview"
              className="mt-4 w-32 h-32 object-cover rounded-full"
            />
          )}
        </div>
        <button
          type="submit"
          className={`w-full p-2 rounded ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500'
          } text-white`}
          disabled={loading}
        >
          {loading ? 'Updating...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default ProfileManagement;

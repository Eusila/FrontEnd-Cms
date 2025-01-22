import React, { useState } from 'react';
import { apiPost } from '../utils/apiService';

const AddCattleForm = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    breed: '',
    weight: '',
    price: '',
    image: null,
  });
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    // Validation
    if (!formData.categoryName || !formData.breed || !formData.weight || !formData.price || !formData.image) {
      setError('Please fill in all fields and upload an image.');
      setLoading(false);
      return;
    }

    try {
      const cattleData = new FormData();
      cattleData.append('categoryName', formData.categoryName);
      cattleData.append('breed', formData.breed);
      cattleData.append('weight', formData.weight);
      cattleData.append('price', formData.price);
      cattleData.append('image', formData.image);

      await apiPost('/cattle/add', cattleData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccess('Cattle added successfully!');
      setFormData({
        categoryName: '',
        breed: '',
        weight: '',
        price: '',
        image: null,
      });
      setPreview(null);
    } catch (err) {
      setError('Failed to add cattle. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Add Cattle</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Category Name</label>
          <input
            type="text"
            name="categoryName"
            value={formData.categoryName}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., Dairy, Beef"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., Holstein, Angus"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Weight (kg)</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., 500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="e.g., 1200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Upload Image</label>
          <input type="file" onChange={handleImageChange} className="w-full" />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-32 h-32 object-cover rounded-md"
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
          {loading ? 'Adding...' : 'Add Cattle'}
        </button>
      </form>
    </div>
  );
};

export default AddCattleForm;

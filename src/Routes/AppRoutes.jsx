import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../Components/AuthForm';
import LandingPage from '../Pages/LandingPage';
import ForgotPassword from '../Components/ForgotPassword';
//import AdminDashboard from '../Pages/AdminDashboard';
//import AddCattleForm from '../Components/AddCattleForm';
//import ViewCattleList from '../Components/ViewCattleList';
//import PaymentPage from '../Pages/PaymentPage';
//import BuyerDashboard from '../Pages/BuyerDAshboard';
//import SellerDashboard from '../Pages/SellerDashboard';
//import BrowseCattle from '../Components/BrowseCattle'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<AuthForm />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      

      {/*<Route path="/admin" element={<AdminDashboard />} />
      <Route path="/seller" element={<SellerDashboard />} />
      <Route path="/seller/add-cattle" element={<AddCattleForm />} />
      <Route path="/seller/view-cattle" element={<ViewCattleList />} />
      <Route path="/buyer" element={<BuyerDashboard />} />
      <Route path="/buyer/browse-cattle" element={<BrowseCattle />} />
      <Route path="/admin/manage-users" element={<UserManagement/>} />
      <Route path="/admin/manage-cattle" element={<CattleManagement />} />
      */}
      
    </Routes>
  );
};

export default AppRoutes;

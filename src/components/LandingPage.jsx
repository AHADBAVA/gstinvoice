import React from 'react';
import { NavLink } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className=" to-purple-600 flex w-full h-screen items-center justify-center">
      <div className="max-w-3xl bg-white p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">GST Invoice Generator</h1>
          <p className="text-gray-600">Generate GST-compliant invoices with ease!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Custom Logo & Branding</h2>
            <p>Add your company logo to your invoices and customize branding to represent your business identity.</p>
          </div>
          <div className="bg-green-500 text-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Custom Templates</h2>
            <p>Create and save custom invoice templates tailored to your specific business needs.</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Premium Membership</h2>
          <p>Upgrade to our premium membership for access to advanced features and support for large-scale invoicing.</p>
        </div>
        <div className="mt-8">
            <NavLink to='/signup'><button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300">SignUp Free trail</button></NavLink>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div className="font-sans p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl mb-8 text-center">Welcome to the Inventory App</h1>
      
      <p className="text-center mb-6">
        Manage your products efficiently and keep track of stock levels.
      </p>

      <div className="text-center">
        <Link to="/products" className="bg-blue-600 text-white py-2 px-4 rounded-md">
          View Products
        </Link>
      </div>
    </div>
  );
}

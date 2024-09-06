import { json } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import Button from '../components/Button';
import api from '../utils/api';

// Fetch products from the backend
export const loader = async () => {
  const response = await api.get('/products');
  return json(response.data);
};

// Handle product deletion
const handleDelete = async (id) => {
  if (confirm('Are you sure you want to delete this product?')) {
    try {
      await api.delete(`/products/${id}`);
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      console.error('Failed to delete product', error);
    }
  }
};

export default function ProductList() {
  const products = useLoaderData();

  return (
    <div className="font-sans p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl mb-8 text-center">Product List</h1>

      {/* Product List */}
      <ul className="list-disc pl-6 space-y-2 mb-8">
        {products.map((product) => (
          <li key={product._id} className="text-lg flex justify-between items-center">
            <span className="font-semibold">{product.name}</span> - {product.amount} units - $
            {product.price}
            <div>
              <Link to={`/products/${product._id}/edit`} className="mr-2">
                <Button className="bg-yellow-500 hover:bg-yellow-600">Edit</Button>
              </Link>
              <Button className="bg-red-600 hover:bg-red-700" onClick={() => handleDelete(product._id)}>
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* Link to Create New Product */}
      <div className="text-center mt-8">
        <Link to="/products/new">
          <Button className="bg-green-600 hover:bg-green-700">Add New Product</Button>
        </Link>
      </div>
    </div>
  );
}

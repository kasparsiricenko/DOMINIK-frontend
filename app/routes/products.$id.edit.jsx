import { json, redirect } from '@remix-run/node';
import { useLoaderData, Form, useNavigation } from '@remix-run/react';
import api from '../utils/api';

// Fetch product data for editing
export const loader = async ({ params }) => {
  const response = await api.get(`/products/${params.id}`);
  return json(response.data);
};

// Handle form submission for editing
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const name = formData.get('name');
  const amount = formData.get('amount');
  const price = formData.get('price');

  await api.put(`/products/${params.id}`, { name, amount, price });
  return redirect('/products');
};

export default function EditProduct() {
  const product = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className="font-sans p-4 max-w-3xl mx-auto">
      <h1 className="text-3xl mb-8 text-center">Edit Product</h1>

      <Form method="post" className="space-y-4">
        <fieldset className="border border-gray-300 p-4 rounded-md">
          <legend className="text-lg font-semibold mb-4">Product Information</legend>

          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-2 font-medium">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="border border-gray-300 p-2 rounded-md"
              defaultValue={product.name}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="amount" className="mb-2 font-medium">
              Amount
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              className="border border-gray-300 p-2 rounded-md"
              defaultValue={product.amount}
              required
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="price" className="mb-2 font-medium">
              Price (in USD)
            </label>
            <input
              type="number"
              name="price"
              id="price"
              step="0.01"
              className="border border-gray-300 p-2 rounded-md"
              defaultValue={product.price}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md mt-4"
            disabled={navigation.state === 'submitting'}
          >
            {navigation.state === 'submitting' ? 'Updating...' : 'Update Product'}
          </button>
        </fieldset>
      </Form>
    </div>
  );
}

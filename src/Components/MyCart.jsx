import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart,removeToCart,decrementQuantity,incrementQuantity } from '../features/CartSlice';

const MyCart = () => {
  const carts = useSelector((state) => state.allCart.carts);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
};
const handleDecrement = (name) => {
    dispatch(removeToCart(name));
};
const handleIncrement = (product) => {
    dispatch(incrementQuantity({name:product.name}));
};
const handleDecre = (product) => {
    dispatch(decrementQuantity({ name:product.name }));
};

  return (
    <div className="mt-40 p-5">
      <div className="p-10 bg-gray-100 shadow-2xl rounded-lg relative w-full max-w-4xl mx-auto">
        <div className='flex flex-row items-center justify-between'>
          <h1 className="text-2xl font-bold mb-5">My Cart ({carts.length})</h1>
          <button onClick={handleClearCart} className='text-white font-bold p-2 border-gray-400 bg-red-600 rounded-md'>
            <DeleteIcon />
            Empty Cart
          </button>
        </div>
        {carts.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border border-gray-300"></th>
                <th className="p-2 border border-gray-300">Image</th>
                <th className="p-2 border border-gray-300">Name</th>
                <th className="p-2 border border-gray-300">Price</th>
                <th className="p-2 border border-gray-300">Quantity</th>
                <th className="p-2 border border-gray-300">Shoe Size</th>
                <th className="p-2 border border-gray-300">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((product, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border border-gray-300">
                    <button onClick={() => handleDecrement(product.name)} className="text-red-500 hover:text-red-700">
                      <DeleteIcon />
                    </button>
                  </td>
                  <td className="p-2 border border-gray-300">
                    <img src={product.img} alt={product.img} className="w-12 h-12" />
                  </td>
                  <td className="p-2 border border-gray-300">{product.name}</td>
                  <td className="p-2 border border-gray-300">{product.price}</td>
                  <td className="p-2 border border-gray-300">
                    <div className="flex items-center justify-center gap-2">
                      <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleDecre(product)}>-</button>
                      <input
                        type="text"
                        value={product.qnty}
                        readOnly
                        className="w-10 text-center border border-gray-300 rounded"
                      />
                      <button className="px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleIncrement(product)}>+</button>
                    </div>
                  </td>
                  <td className="p-2 border border-gray-300">
                    <select className="border border-gray-300 rounded p-1">
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </select>
                  </td>
                  <td className="p-2 border border-gray-300">{product.qnty * product.price}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="bg-gray-100 text-center">
                <td colSpan="4" className="p-2 border border-gray-300 font-bold">
                  Total Items: {carts.length}
                </td>
                <td colSpan="2" className="p-2 border border-gray-300 font-bold">
                  Total Price: ${carts.reduce((acc, item) => acc + (item.qnty * item.price), 0).toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 mt-10">
            <ShoppingCartIcon className="text-gray-400" style={{ fontSize: '100px' }} />
            <p className="text-gray-500 text-lg">Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;

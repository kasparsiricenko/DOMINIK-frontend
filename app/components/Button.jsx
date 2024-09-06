export default function Button({ children, onClick, type = 'button', className = '', disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-md ${disabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

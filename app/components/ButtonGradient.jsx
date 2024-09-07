export default function ButtonGradient({ children, to, Icon, className = '' }) {
  return (
    <a
      href={to}
      className={`group relative flex flex-col items-center justify-center p-2 aspect-auto w-32 h-32 text-md font-semibold text-white dark:text-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 ${className}`}
    >
      {/* Light Mode Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-100 group-hover:opacity-0 transition-all duration-700 ease-in-out dark:opacity-0"></div>
      
      {/* Dark Mode Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out dark:opacity-100"></div>

      {/* White or dark blurred background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-700 ease-in-out bg-white dark:bg-gray-900 blur-2xl"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-700 ease-in-out bg-gradient-to-br from-transparent via-purple-500 to-transparent blur-2xl"></div>

      {/* Icon (optional) */}
      {Icon && <Icon className="w-16 h-16 mb-2 relative z-10 transition-transform duration-300 ease-in-out group-hover:scale-110" />}

      {/* Button text */}
      <span className="text-center relative z-10">{children}</span>
    </a>
  );
}
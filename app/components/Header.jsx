import LanguageSelector from './LanguageSelector'; // Import the LanguageSelector component

export default function Header() {
  return (
    <header className="bg-gray-800/50 dark:bg-gray-900/70 backdrop-blur-lg text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.webp" alt="DOMINIK Logo" className="h-10 w-10 mr-4" />
          <h1 className="text-4xl font-bold">DOMINIK</h1>
        </div>

        {/* Add the LanguageSelector */}
        <LanguageSelector />
      </div>
    </header>
  );
}
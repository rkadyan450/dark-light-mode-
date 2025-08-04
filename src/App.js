import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl">Dark Mode Example</h1>
        <ThemeToggle />
      </header>
      <main className="p-4">
        <p>This is a light/dark mode toggle example.</p>
      </main>
    </div>
  );
}

export default App;

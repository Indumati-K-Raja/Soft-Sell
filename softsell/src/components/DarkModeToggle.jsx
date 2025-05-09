import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div className="p-4 text-right">
      <button
        className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        onClick={() => setDark(!dark)}
      >
        {dark ? '☀️ Light' : '🌙 Dark'}
      </button>
    </div>
  );
}

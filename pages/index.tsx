// pages/index.tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import Terminal from '../components/TerminalSim';
import ToolCard from '../components/ToolCard';
import { tools } from '../utils/toolData';

export default function Home() {
  const [hackerMode, setHackerMode] = useState(false);

  return (
    <main className={`min-h-screen p-6 ${hackerMode ? 'bg-black text-green-400' : 'bg-gray-900 text-white'} transition-all duration-500`}>
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold tracking-wider">DecryptMike Dashboard</h1>
        <button
          className="px-4 py-2 border border-green-400 rounded hover:bg-green-500 hover:text-black transition duration-300"
          onClick={() => setHackerMode(!hackerMode)}
        >
          {hackerMode ? 'Disable Hacker Mode' : 'Activate Hacker Mode'}
        </button>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl mb-4 font-semibold">Toolbox</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tools.map(tool => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl mb-4 font-semibold">Terminal</h2>
        <Terminal hackerMode={hackerMode} />
      </section>
    </main>
  );
}

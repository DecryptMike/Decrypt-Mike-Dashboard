import React, { useState } from 'react';

type Props = {
  hackerMode: boolean;
};

const fakeResponses: Record<string, string> = {
  whoami: 'decryptmike@dashboard',
  help: 'Commands: whoami, access, hack, clear',
  access: 'ACCESS GRANTED...',
  hack: 'Initiating Decryption Protocol...',
};

export default function Terminal({ hackerMode }: Props) {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const response = fakeResponses[input.trim()] || 'Unknown command';
    setHistory([...history, `> ${input}`, response]);
    setInput('');
  };

  return (
    <div className={`p-4 border rounded-xl ${hackerMode ? 'bg-black text-green-400 border-green-500' : 'bg-gray-800 text-white border-gray-700'}`}>
      <div className="min-h-[200px] font-mono text-sm mb-2 overflow-y-auto">
        {history.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleCommand} className="flex gap-2">
        <span className="font-mono">{'>'}</span>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 bg-transparent outline-none font-mono"
          placeholder="type a command (try: whoami)"
        />
      </form>
    </div>
  );
}

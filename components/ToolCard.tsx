// components/ToolCard.tsx
import React from 'react';

interface ToolProps {
  id: string;
  name: string;
  description: string;
  link: string;
}

const ToolCard: React.FC<ToolProps> = ({ name, description, link }) => {
  return (
    <div className="border border-green-500 p-4 rounded-lg bg-black text-green-400 hover:bg-green-700 transition">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm mb-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-300 underline hover:text-white"
      >
        Visit Tool
      </a>
    </div>
  );
};

export default ToolCard;


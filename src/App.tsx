import React, { useState, useMemo } from 'react';
import './App.css';

interface EmojiItem {
  id: string;
  symbol: string;
  title: string;
  keywords: string;
}

const initialEmojis: EmojiItem[] = [
  {
    id: '1',
    symbol: '💯',
    title: '100',
    keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
  },
  {
    id: '2',
    symbol: '🔢',
    title: '1234',
    keywords: 'input symbol for numbers symbol',
  },
  {
    id: '3',
    symbol: '🔢',
    title: '1234',
    keywords: 'input symbol for numbers symbol',
  },
];

interface EmojiCardProps {
  emoji: EmojiItem;
  isActive?: boolean;
}

const EmojiCard: React.FC<EmojiCardProps> = ({ emoji, isActive = false }) => {
  return (
    <div className={`emoji-card ${isActive ? 'active' : ''}`}>
      <div className="emoji-symbol">{emoji.symbol}</div>
      <h3 className="emoji-title">{emoji.title}</h3>
      <p className="emoji-keywords">{emoji.keywords}</p>
    </div>
  );
};

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredEmojis = useMemo(() => {
    return initialEmojis.filter((emoji) => {
      const query = searchQuery.toLowerCase();
      return (
        emoji.title.toLowerCase().includes(query) ||
        emoji.keywords.toLowerCase().includes(query)
      );
    });
  }, [searchQuery]);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="main-title">Emoji Finder</h1>
        <p className="subtitle">Find emoji by keywords</p>
      </header>

      <div className="content-wrapper">
        <div className="search-container">
          <input
            type="text"
            placeholder="Placeholder"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <main className="emoji-grid">
          {filteredEmojis.map((emoji, index) => (
            <EmojiCard 
              key={emoji.id} 
              emoji={emoji} 
              isActive={index === 2} 
            />
          ))}
        </main>
      </div>
    </div>
  );
}

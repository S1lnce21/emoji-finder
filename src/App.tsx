import { useState, useEffect } from 'react';
import './App.css';
import { getEmojis, type IEmojiItem } from './api/emojiApi';
import { Header } from './components/Header';
import { SearchInput } from './components/SearchInput';
import { EmojiGrid } from './components/EmojiGrid';

export default function App() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [emojis, setEmojis] = useState<IEmojiItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getEmojis(searchQuery);
        setEmojis(data);
      } catch {
        setError('Не удалось загрузить данные. Проверьте, запущен ли сервер (start.bat).');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div className="app-container">
      <Header />

      <div className="content-wrapper">
        <SearchInput 
          value={searchQuery} 
          onChange={setSearchQuery} 
        />

        {error && (
          <div style={{ padding: '20px', color: '#ff4d4f', fontWeight: 'bold', textAlign: 'center' }}>
            {error}
          </div>
        )}

        {loading && (
          <div style={{ padding: '20px', textAlign: 'center', color: '#135d70', fontWeight: '500' }}>
            Загрузка списка эмодзи...
          </div>
        )}

        {!loading && !error && (
          <EmojiGrid emojis={emojis} />
        )}
      </div>
    </div>
  );
}

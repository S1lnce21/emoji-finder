import { EmojiCard } from './EmojiCard';
import { type IEmojiItem } from '../api/emojiApi';

interface EmojiGridProps {
  emojis: IEmojiItem[];
}

export function EmojiGrid({ emojis }: EmojiGridProps) {
  if (emojis.length === 0) {
    return (
      <p style={{ color: '#7a7a7a', textAlign: 'center', width: '100%', marginTop: '20px' }}>
        Эмодзи не найдены
      </p>
    );
  }

  return (
    <main className="emoji-grid">
      {emojis.map((emoji) => (
        <EmojiCard 
          key={emoji.id} 
          emoji={emoji} 
          isActive={false} 
        />
      ))}
    </main>
  );
}

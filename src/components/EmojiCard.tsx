import { type IEmojiItem } from '../api/emojiApi';

interface EmojiCardProps {
  emoji: IEmojiItem;
  isActive?: boolean;
}

export function EmojiCard({ emoji, isActive = false }: EmojiCardProps) {
  return (
    <div className={`emoji-card ${isActive ? 'active' : ''}`}>
      <div className="emoji-symbol">{emoji.emoji}</div>
      <h3 className="emoji-title">{emoji.title}</h3>
      <p className="emoji-keywords">{emoji.keywords}</p>
    </div>
  );
}

import { type ChangeEvent } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Введите название или ключевое слово..."
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

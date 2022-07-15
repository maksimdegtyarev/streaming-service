import { FormEvent } from 'react';
import { SearchIcon } from '../SearchIcon';
import styles from './search.module.css';

interface ISearch {
  onInput: (value: string) => void;
};

export const Search = ({ onInput }: ISearch) => {
  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    onInput(e.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} placeholder="Что будем искать?" onInput={handleInput} />
      <SearchIcon className={styles.icon} />
    </div>
  )
};
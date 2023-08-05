import React, { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import { setQuery } from 'src/features/UI/SearchInput/searchSlice';
import styles from './styles.module.css';

interface SearchInputProps {
  placeholder: string,
}

const SearchInput = React.memo(({ placeholder }: SearchInputProps) => {
  const query: string = useAppSelector(state => state.query.query);
  const dispatch = useAppDispatch();

  const handleQuery = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  }

  return <input
    value={query ? query : ''}
    placeholder={placeholder}
    className={styles.input}
    onChange={(e) => handleQuery(e)}
  />
});

export default SearchInput;
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'src/hooks/hooks';
import useDebounce from 'src/hooks/useDebounce';
import { fetchReps } from 'src/features/components/RepsListComponent/repsSlice';
import RepsListComponent from 'src/features/components/RepsListComponent/RepsListComponent';
import SearchInput from 'src/features/UI/SearchInput/SearchInput';
import Paginator from 'src/features/UI/Paginator/Paginator';
import { generateQuery } from 'src/utils/generateQuery';
import { nullSearchQuery } from 'src/utils/nullSearchQuery';
import styles from './styles.module.css';

const MainPage = () => {
  const query: string | null = useAppSelector(state => state.query.query);
  const page: number = useAppSelector(state => state.paginator.current);
  const prevPage: number = useAppSelector(state => state.paginator.prev);
  const cursor: { first: string, last: string } = useAppSelector(state => state.repositories.cursor);
  const dispatch = useAppDispatch();

  const memoQuery: string = useMemo(() => {
    return generateQuery(query, page, prevPage, cursor);
  }, [query, page]);

  const debouncedSearch = useDebounce(query ? memoQuery : nullSearchQuery(), 500);
  useEffect(() => {
    dispatch(fetchReps(debouncedSearch));
  }, [dispatch, debouncedSearch]);

  return (
    <section>
      <header className={styles.header}>
        <h1 className={styles.header__title}>GitHub Repositories search</h1>
        <SearchInput placeholder='Search...' />
      </header>
      <RepsListComponent />
      <footer>
        <Paginator />
      </footer>
    </section>
  );
};

export default MainPage;
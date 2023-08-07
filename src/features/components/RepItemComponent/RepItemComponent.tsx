import React, { useMemo, FC } from 'react';
import { useAppDispatch } from 'src/hooks/hooks';
import { Link } from 'react-router-dom';
import { selectRepository } from 'src/features/components/RepsListComponent/repsSlice';
import type { RepositoryDetailsType } from 'src/types/repositoryType';
import { parseRepository } from 'src/utils/parseRepository';
import styles from './styles.module.css';

const RepItemComponent: FC<RepositoryDetailsType> = React.memo((repository) => {
  const { description, id, name, url, stargazerCount, lastCommitDate } = useMemo(() => {
    return parseRepository(repository);
  }, [repository]);

  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(selectRepository(repository));
  }

  return (
    <li
      className={styles.repository}
      onClick={handleClick}
    >
      <div>
        <div className={styles.repository__header}>
          <h1 className={styles.repository__name}>
            <Link to={`/${id}`}>{name}</Link>
          </h1>
          <h2 className={styles.repository__stars}>STARS: {stargazerCount}</h2>
        </div>
        <h2 className={styles.repository__description}>{description}</h2>
        <a
          href={url}
          className={styles.repository__url}
        >
          {url}
        </a>
      </div>
      <div className={styles.repository__commit}>
        <h1 className={styles.repository__commitTitle}>last commit: </h1>
        <h2 className={styles.repository__commitDate}>{lastCommitDate}</h2>
      </div>
    </li>
  )
});

export default RepItemComponent;

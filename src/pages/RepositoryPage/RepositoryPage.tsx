import { useMemo } from 'react';
import { useAppSelector } from 'src/hooks/hooks';
import { parseRepository } from 'src/utils/parseRepository';
import Tag from 'src/features/UI/Tag/Tag';
import styles from './styles.module.css';

const RepositoryPage = () => {
  const repository: string | null = useAppSelector(state => state.repositories.selectedRepository);
  const { description, name, stargazerCount, lastCommitDate, owner, languages } = useMemo(() => {
    return parseRepository(repository ? JSON.parse(repository) : '');
  }, [repository]);

  return (
    <section className={styles.repository__box}>
      <section className={styles.repository}>
        <header  className={styles.repository__header}>
          <div className={styles.repository__headerBox}>
            <div className={styles.repository__headerNameBox}>
              <h1 className={styles.repository__name}>{name}</h1>
              <h2 className={styles.repository__stars}>{stargazerCount}</h2>
            </div>
            <h3 className={styles.repository__commit}>last commit:
              <span className={styles.repository__commitDate}>
              {lastCommitDate}
            </span>
            </h3>
          </div>
          <div className={styles.repository__owner}>
            <img className={styles.repository__ownerAvatar} src={owner.avatarUrl} alt=""/>
            <div>
              <h1 className={styles.repository__ownerLogin}>{owner.login}</h1>
              <a href={owner.url} className={styles.repository__ownerUrl}>{owner.url}</a>
            </div>
          </div>
        </header>
        <footer className={styles.repository__footer}>
          <h1 className={styles.repository__footerTitle}>Languages: </h1>
          <ul className={styles.repository__tags}>
            {languages.map(el => <Tag key={el.id} value={el.value} />)}
          </ul>
          <h1 className={styles.repository__footerTitle}>Description: </h1>
          <p className={styles.repository__description}>{description}</p>
        </footer>
      </section>
    </section>
  )
};

export default RepositoryPage;
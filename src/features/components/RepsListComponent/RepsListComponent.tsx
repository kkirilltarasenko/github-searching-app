import { useAppSelector } from 'src/hooks/hooks';
import { RepositoryType } from 'src/types/repositoryType';
import RepItemComponent from 'src/features/components/RepItemComponent/RepItemComponent';
import styles from './styles.module.css';

const RepsListComponent = () => {
  const repositories: Array<RepositoryType> = useAppSelector(state => state.repositories.repositories);

  return (
    <ul className={styles.repositories}>
      {repositories.map((item) => <RepItemComponent key={item.node.id} repository={item.node} />)}
    </ul>
  );
};

export default RepsListComponent;
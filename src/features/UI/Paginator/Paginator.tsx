import { useAppSelector } from 'src/hooks/hooks';
import { PaginatorItemType } from 'src/types/paginatorItemType';
import PaginatorItem from 'src/features/UI/PaginatorItem/PaginatorItem';
import styles from './styles.module.css';

const Paginator = () => {
  const items: PaginatorItemType[] = useAppSelector(state => state.paginator.items);
  return (
    <ul className={styles.paginator}>
      {items.map(el =>
        <PaginatorItem key={el.id} item={el} />
      )}
    </ul>
  )
};

export default Paginator;
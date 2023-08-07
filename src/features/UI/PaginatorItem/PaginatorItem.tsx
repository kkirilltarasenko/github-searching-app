import React, { FC } from 'react';
import { useAppDispatch } from 'src/hooks/hooks';
import { setActiveItem } from 'src/features/UI/Paginator/paginatorSlice';
import type { PaginatorItemType } from 'src/types/paginatorItemType';
import styles from './styles.module.css';

interface PaginatorItemProps {
  item: PaginatorItemType,
}

const PaginatorItem: FC<PaginatorItemProps> = React.memo(({ item }) => {
  const dispatch = useAppDispatch();
  const { value, isClicked } = item;
  const classNames: string[] = [styles.paginator__item];
  if (isClicked) {
    classNames.push(styles.paginator__item__clicked);
  }

  const handleClick = () => {
    dispatch(setActiveItem(item));
  }

  return (
    <li
      className={classNames.join(' ')}
      onClick={handleClick}
    >
      {value}
    </li>
  )
});

export default PaginatorItem;

import React, { FC } from 'react';
import styles from './styles.module.css';

interface TagProps {
  value: string,
}

const Tag: FC<TagProps> = React.memo(({ value }) => {
  return <li className={styles.tag}>{value}</li>
});

export default Tag;

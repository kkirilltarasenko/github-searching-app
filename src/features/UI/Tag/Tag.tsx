import React from 'react';
import styles from './styles.module.css';

interface TagProps {
  value: string,
}

const Tag = React.memo(({ value }: TagProps) => {
  return <li className={styles.tag}>{value}</li>
});

export default Tag;
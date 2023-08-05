import { useRouteError } from 'react-router-dom';
import styles from './style.module.css';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className={styles.error__page}>
      <div className={styles.error}>
        <h1 className={styles.error__title}>Oops!</h1>
        <h2>Some error occurred</h2>
        <p className={styles.error__status}>{error.status}</p>
        <i>{error.statusText}</i>
      </div>
    </section>
  )
};

export default ErrorPage;
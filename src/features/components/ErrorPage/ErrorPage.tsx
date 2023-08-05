import styles from './style.module.css';

const ErrorPage = () => {
  return (
    <section className={styles.error__page}>
      <div className={styles.error}>
        <h1 className={styles.error__title}>Oops!</h1>
        <h2>Some error occurred</h2>
      </div>
    </section>
  )
};

export default ErrorPage;
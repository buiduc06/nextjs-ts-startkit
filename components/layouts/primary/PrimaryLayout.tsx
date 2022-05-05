import Head from 'next/head';
import styles from './PrimaryLayout.module.css';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = (props) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className={styles.main}>{props.children}</main>
    </>
  );
};

export default PrimaryLayout;
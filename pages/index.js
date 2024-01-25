import Link from 'next/link';
import Head from 'next/head'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Post </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Home<Link href='/posts/first-post'>page</Link>
        </h1>

        <p className={styles.description}>
          Hier word gewerkt <code>QCS Service</code>
        </p>
      </main>  
    </div>


  )
}
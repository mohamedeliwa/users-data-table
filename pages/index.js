import Head from 'next/head'
import Filtering from '../components/filtering'
import Paginations from '../components/paginations'
import Table from '../components/table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Users Table Data</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Search form */}
      <Filtering />
      {/* Table to display users' data */}
      <Table />
      {/* paginations' component */}
     <Paginations />
    </div>
  )
}

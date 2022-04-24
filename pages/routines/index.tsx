import Head from 'next/head'
import styles from '../../styles/dashboard.module.scss'

export default function Routines() {

    return (
        <div className={styles.container} style={{ marginTop: "50px" }}>
            <Head>
                <title>Search Routines</title>
                <meta name="description" content="Search routines" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>

            </main>
        </div>
    )
}
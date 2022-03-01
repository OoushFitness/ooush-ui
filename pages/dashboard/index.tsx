import Head from 'next/head'
import styles from '../../styles/Home.module.scss'

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ooush Dashboard</title>
                <meta name="description" content="Welcome to Ooush - your next workout tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <section className={styles.section_one}>

                </section>
                <section className={styles.section_two}>

                </section>
                <section className={styles.section_three}>

                </section>
            </main>
        </div>
    )
}
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Login() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Ooush Home</title>
                <meta name="description" content="Welcome to Ooush - your next workout tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <section className={styles.section_one}>
                    <div className={styles.image_container}><Image
                        alt="Next.js logo"
                        src="/images/image3.jpeg"
                        width={'500px'}
                        height={'500px'}
                        layout="fixed"
                        loading="lazy"
                    /></div>
                </section>
                <section className={styles.section_two}>

                </section>
                <section className={styles.section_three}>

                </section>
            </main>
        </div>
    )
}

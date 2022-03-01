import Head from 'next/head'
import PromoSection from '../src/components/promoSection/promoSection'
import styles from '../styles/Home.module.scss'
import image1 from '../public/images/image1.webp'
import image2 from '../public/images/image2.jpeg'
import image3 from '../public/images/image3.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ooush Home</title>
        <meta name="description" content="Welcome to Ooush - your next workout tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section className={styles.section}>
          <PromoSection
            title="Let us introduce you to Oooush Fitness"
            subtitle='The next generation workout tracker'
            image={image3}
            imageAlt="Woman in gym wearing workout gear swinging kettlebell"
            buttonText="Create an account"
            buttonUrl='/login'
            reverse
          />
        </section>
        <section className={styles.section}>
        <PromoSection
            title="Track your workouts and see your progress, all in one place"
            image={image2}
            imageAlt="Man in gym looking at mobile phone leaning on bench press weights"
            buttonText="Start now"
            buttonUrl='/login'
          />
        </section>
        <section className={styles.section}>
        <PromoSection
            title="Get motivated, and stay motivated"
            subtitle='We have a variety of workouts to get you started'
            image={image1}
            imageAlt="Man squatting down attempting a deadlift"
            buttonText="See how it works"
            buttonUrl='/about'
            reverse
          />
        </section>
      </main>
    </div>
  )
}

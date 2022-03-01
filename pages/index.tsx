import Head from 'next/head'
import PromoSection from '../src/components/promoSection/promoSection'
import { LOGIN_MESSAGE_TIMEOUT_MILLISECONDS } from "../utils/constants/ooush-constants"
import {login} from "../service/auth/authService";
import styles from '../styles/Home.module.scss'
import image1 from '../public/images/image1.webp'
import image2 from '../public/images/image2.jpeg'
import image3 from '../public/images/image3.jpeg'
import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState("");
    const [nameData, setNameData] = useState(null);
    const [loginMessage, setLoginMessage] = useState("");
    const [error, setError] = useState("");
  const getName = () => {
    let data = {
        userName: "pete@ooushfitness.com",
        password: "Liverpool1",
    };
    login(data).then((response: any) => {
        displayNotification(response.loginMessage);
    }).catch((error: string)  => {
        setError(error);
        console.error("Error on login", error);
    })
}

const displayNotification = (message: string) => {
    setLoginMessage(message);
    setTimeout(() => {
        setLoginMessage("");
    }, LOGIN_MESSAGE_TIMEOUT_MILLISECONDS);
}
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

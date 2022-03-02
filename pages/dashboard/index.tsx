import Head from 'next/head'
import { useState } from 'react';
import styles from '../../styles/dashboard.module.scss'

export default function Dashboard() {
    const sizes = {
        small: `${(840 / 3)}px`,
        medium: `${840 - (840 / 3) - 20}px`,
        large: `${840}px`,
    }
    const [cardSizes, setCardSizes] = useState([sizes.large, sizes.medium, sizes.small]);

    const handleClick = (card: number):void => {
        const newCardSizes = [...cardSizes];
        if(cardSizes[card] === sizes.small) {
            newCardSizes[card] = sizes.medium;
        } else if (cardSizes[card] === sizes.medium) {
            newCardSizes[card] = sizes.large;
        } else {
            newCardSizes[card] = sizes.small;
        }
        setCardSizes(newCardSizes);
    }


    return (
        <div className={styles.container} style={{ marginTop: "50px" }}>
            <Head>
                <title>Ooush Dashboard</title>
                <meta name="description" content="Welcome to Ooush - your next workout tool" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <section>
                    <div className={styles.main__overview}>
                        <div className={styles.overviewcard}>
                            <div className={styles.overviewcard__icon}>Overview</div>
                            <div className={styles.overviewcard__info}>Card</div>
                        </div>
                        <div className={styles.overviewcard}>
                            <div className={styles.overviewcard__icon}>Overview</div>
                            <div className={styles.overviewcard__info}>Card</div>
                        </div>
                        <div className={styles.overviewcard}>
                            <div className={styles.overviewcard__icon}>Overview</div>
                            <div className={styles.overviewcard__info}>Card</div>
                        </div>
                        <div className={styles.overviewcard}>
                            <div className={styles.overviewcard__icon}>Overview</div>
                            <div className={styles.overviewcard__info}>Card</div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={styles.main__cards}>
                        <div className={styles.card} onClick={(): void => handleClick(0)} style={{ height: `${cardSizes[0]}` }}>Card 1</div>
                        <div className={styles.card} onClick={(): void => handleClick(1)} style={{ height: `${cardSizes[1]}` }}>Card 2</div>
                        <div className={styles.card} onClick={(): void => handleClick(2)} style={{ height: `${cardSizes[2]}` }}>Card 3</div>
                    </div>
                </section>
            </main>
        </div>
    )
}
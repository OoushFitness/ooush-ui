import Head from "next/head";
import PromoSection from "../../src/components/promoSection/promoSection";
import styles from "../../styles/Home.module.scss";
import image2 from '../../public/images/Dashboard2_example.webp';
import image3 from '../../public/images/graph_example.jpeg';
import image1 from '../../public/images/Dashboard1_example.jpeg';
import image4 from '../../public/images/notebook_example.jpeg';
import image5 from '../../public/images/timer_example.jpeg';

export default function About() {
	return (
		<div className={styles.container}>
			<Head>
				<title>About Ooush</title>
				<meta
					name="description"
					content="Welcome to Ooush - your next workout tool"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
                <h1>Here&apos;s how it works</h1>
				<section className={styles.section}>
					<PromoSection
						// title="You've been spending all your manually tracking workouts on bits of paper"
						subtitle="You've been spending all your manually tracking workouts on bits of paper.  Ooush is here to help you track your workouts in a more efficient way."
                        subtitleSize="large"
						image={image4}
						imageAlt="Todo list on notepad with pen"
						reverse
					/>
				</section>
				<section className={styles.section}>
					<PromoSection
						title="Inefficient workout tracking leads to poor results"
						image={image3}
						imageAlt="Graph showing positive vs negative results"
					/>
				</section>
				<section className={styles.section}>
					<PromoSection
						title="The Dashboard"
						subtitle="Let us introduce you to the Oooush Fitness Dashboard.  A place where you can see your progress in one place. You can see your progress in a graph, and you can see your progress in a table. You can also see your progress in a calendar. You can also see your progress in a pie chart."
                        subtitleSize="large"
						image={image2}
						imageAlt="data dashboard with graphs"
						reverse
					/>
				</section>
                <section className={styles.section}>
					<PromoSection
						subtitle="From visualizations of your workout data to help you understand your progress - To in-depth analysis of your workout data - Ooush is here to help you."
						image={image1}
						imageAlt="Data Dashboard with graphs"
					/>
				</section>
                <section className={styles.section}>
					<PromoSection
						subtitle="The simple active tracker allows you to get through your workout and quickly enter reps and weight or reps and time. The tracker only shows you what you need based on the workout you are doing.  You can also see your progress in a pie chart."
                        subtitleSize="large"
						image={image5}
						imageAlt="Pomodoro style timer app on mobile phone"
						reverse
					/>
				</section>
			</main>
		</div>
	);
}

import Head from 'next/head'
import {useEffect, useState} from 'react';
import {getDashboardWorkouts} from "../../service/workouts/workoutService";

import styles from '../../styles/dashboard.module.scss'

interface DashboardWorkout {
    day: String,
    dayId: number,
    exercises: String[],
    weekday: boolean,
    viewing: boolean,
};

export default function Dashboard() {
    const sizes = {
        small: `${(840 / 3)}px`,
        medium: `${840 - (840 / 3) - 20}px`,
        large: `${840}px`,
    }
    const [cardSizes, setCardSizes] = useState([sizes.large, sizes.medium, sizes.small]);
    const [dashboardWorkouts, setDashboardWorkouts] = useState<DashboardWorkout[]>([]);
    const [selectedWorkoutDayId, setSelectedWorkoutDayId] = useState(100);

    useEffect(() => {
        getDashboardWorkouts().then(response => {
            setDashboardWorkouts(response.map((workoutDay: any) => ({...workoutDay, viewing: false})));
        }).catch(error => {
            console.error(error)
        });
    }, []);

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

    const handleViewWorkoutDay = (workoutDayId: number) => {
        let newState = [];
        for (let dashboardWorkout of dashboardWorkouts) {
            const currentViewingState = dashboardWorkout.viewing;
            const newViewingState = dashboardWorkout.dayId === workoutDayId ? !currentViewingState : currentViewingState;
            newState.push(
                {
                    day: dashboardWorkout.day,
                    dayId: dashboardWorkout.dayId,
                    exercises: dashboardWorkout.exercises,
                    weekday: dashboardWorkout.weekday,
                    viewing: newViewingState,
                }
            );
        }
        setDashboardWorkouts(newState);
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
                        {dashboardWorkouts
                            .filter((workout: DashboardWorkout) => workout.weekday)
                            .map((workout: DashboardWorkout, idx: number) => {
                                return (
                                    <div
                                        className={workout.viewing
                                            ? styles.overviewcard__selected
                                            : idx === 0
                                                ? styles.overviewcard__0
                                                : idx === 1
                                                    ? styles.overviewcard__1
                                                    : idx === 2
                                                        ? styles.overviewcard__2
                                                        : styles.overviewcard__3} 
                                        key={"workoutDay" + workout.day}
                                    >
                                        <div className={styles.overviewcard__icon}>{workout.day}</div>
                                        <div className={styles.overviewcard__icon}>Chest Day</div>
                                        <button
                                            className={styles.overviewcard__button}
                                            onClick={() => handleViewWorkoutDay(workout.dayId)}
                                        >
                                            View Workout</button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
                <section>
                    <div className={styles.main__cards}>
                        {dashboardWorkouts
                            .filter((workout: DashboardWorkout) => !workout.weekday)
                            .map((workout: DashboardWorkout) => {
                                return (
                                    <div
                                        className={workout.viewing ? styles.card__selected : styles.card}
                                        onClick={(): void => handleClick(0)} style={{ height: `${cardSizes[3]}` }}
                                    >
                                        <div className={styles.overviewcard__icon}>{workout.day}</div>
                                        <div className={styles.overviewcard__icon}>Leg Day</div>
                                        <button
                                            className={styles.overviewcard__button}
                                            onClick={() => handleViewWorkoutDay(workout.dayId)}
                                        >
                                            View Workout
                                        </button>
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
            </main>
        </div>
    )
}
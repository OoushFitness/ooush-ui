import Head from 'next/head'
import {useEffect, useState} from 'react';
import {
    getDashboardWorkouts,
    setDashboardWorkoutDayTitle,
} from "../../service/workouts/workoutService";
import EditableInput from '../../src/components/editable-input/editableInput';

import styles from '../../styles/dashboard.module.scss'

interface DashboardWorkout {
    day: string,
    dayId: number,
    name: string,
    exercises: string[],
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

    const loadDashboard = () => {
        getDashboardWorkouts().then(response => {
            setDashboardWorkouts(response.map((workoutDay: any) => ({...workoutDay, viewing: false})));
        }).catch(error => {
            console.error(error)
        });
    }

    useEffect(() => {
        loadDashboard();
    }, []);

    const setUserWorkoutDayTitle = (workoutDayId: number, name: string) => {
        const params = {
            workoutDayId: workoutDayId,
            name: name,
        };
        setDashboardWorkoutDayTitle(params).then(response => {
            loadDashboard();
        }).catch(error => {
            console.error(error);
        })
    }

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
                    name: dashboardWorkout.name,
                    viewing: newViewingState,
                }
            );
        }
        setDashboardWorkouts(newState);
    }

    const getClassName = (index: number) => {
        switch(index) {
            case 0:
                return styles.overviewcard__0;
            case 1:
                return styles.overviewcard__1;
            case 2:
                return styles.overviewcard__2;
            case 3:
                return styles.overviewcard__3;
            default:
                return;
        };
    }

    const getWeekendCardClassName = (index: number) => {
        switch(index) {
            case 0:
                return styles.weekendcard__0;
            case 1:
                return styles.weekendcard__1;
            case 2:
                return styles.weekendcard__2;
            default:
                return;
        };
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
                                            : getClassName(idx)}
                                        key={"workoutDay" + workout.day}
                                    >
                                        <div className={styles.overviewcard__icon}>{workout.day}</div>
                                        <EditableInput
                                            displayLabel={workout.name}
                                            defaultLabel="What kind of workout today?"
                                            type="text"
                                            id={workout.dayId}
                                            handleChangeLabel={setUserWorkoutDayTitle}
                                        />
                                        <button
                                            className={styles.overviewcard__button}
                                            onClick={() => handleViewWorkoutDay(workout.dayId)}
                                            style={{visibility: workout.viewing ? 'hidden' : 'visible'}}
                                        >
                                            View Workout
                                        </button>
                                        {workout.viewing 
                                            && <div 
                                                    className={`${styles.divCloseButton} ${styles.dashboardCardCloseButton}`}
                                                    onClick={() => handleViewWorkoutDay(workout.dayId)}
                                                />
                                        }
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
                            .map((workout: DashboardWorkout, idx: number) => {
                                return (
                                    <div
                                        className={workout.viewing
                                            ? styles.weekendcard__selected
                                            : getWeekendCardClassName(idx)} 
                                        key={"workoutDay" + workout.day}
                                    >
                                        <div className={styles.weekendcard__icon}>{workout.day}</div>
                                        <EditableInput
                                            displayLabel={workout.name}
                                            defaultLabel="What kind of workouts today?"
                                            type="text"
                                            id={workout.dayId}
                                            handleChangeLabel={setUserWorkoutDayTitle}
                                        />
                                        <button
                                            className={styles.weekendcard__button}
                                            onClick={() => handleViewWorkoutDay(workout.dayId)}
                                            style={{visibility: workout.viewing ? 'hidden' : 'visible'}}
                                        >
                                            View Workout
                                        </button>
                                        {workout.viewing 
                                            && <div 
                                                    className={`${styles.divCloseButton} ${styles.dashboardCardCloseButton}`}
                                                    onClick={() => handleViewWorkoutDay(workout.dayId)}
                                                />
                                        }
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
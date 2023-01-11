import Head from 'next/head'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../auth/AuthContexts';
import {
    updateUserExercise,
    removeUserExercise,
    fetchExercises
} from '../../service/exercise/exerciseService';
import { deepCloneObject } from '../../utils/object-helpers/object-helpers';
import {
    getDashboardWorkouts,
    setDashboardWorkoutDayTitle,
} from "../../service/workouts/workoutService";
import EditableInput from '../../src/components/editable-input/editableInput';
import OoushTable from '../../src/components/ooush-table/ooushTable';
import { OoushTableRow, OoushExercise } from '../../src/interfaces/commonInterfaces';

import styles from '../../styles/dashboard.module.scss'

interface DashboardWorkout {
    day: string,
    exerciseDayId: number,
    name: string,
    exercises: OoushTableRow[],
    weekday: boolean,
    viewing: boolean,
};

const emptyWorkOutRow = [
    {
        name: "Enter exercise",
        weight: 0,
        reps: 0,
        exerciseId: null,
        sets: 1
    }
];

export default function Dashboard() {
    const sizes = {
        small: `${(840 / 3)}px`,
        medium: `${840 - (840 / 3) - 20}px`,
        large: `${840}px`,
    }
    const [cardSizes, setCardSizes] = useState([sizes.large, sizes.medium, sizes.small]);
    const [dashboardWorkouts, setDashboardWorkouts] = useState<DashboardWorkout[]>([]);
    const [viewedWorkoutDayId, setViewedWorkoutDayId] = useState(-1);
    const [exerciseSearchResults, setExerciseSearchResults] = useState<OoushExercise[]>([]);

    // @ts-ignore
    const { user } = useContext(AuthContext);

    const loadDashboard = () => {
        clearSearchResults();
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
        setViewedWorkoutDayId(viewedWorkoutDayId === -1 ? workoutDayId : -1);
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

    const handleExerciseSearch = (input: string) => {
        fetchExercises({searchName: input}).then((response: OoushExercise[]) => {
            setExerciseSearchResults(input ? response : []);
        }).catch((error: Error) => {
            console.error(error);
        });
    }

    const clearSearchResults = () => {
        setExerciseSearchResults([]);
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
                                const exercises = workout.exercises;
                                const viewing = workout.exerciseDayId === viewedWorkoutDayId;
                                return (
                                    <div
                                        className={viewing
                                            ? styles.overviewcard__selected
                                            : getClassName(idx)}
                                        key={"workoutDay" + workout.day}
                                    >
                                        <div className={styles.overviewcard__iconcontainer}>
                                            <div className={styles.overviewcard__icon}>{workout.day}</div>
                                        </div>
                                        {viewing
                                            ? <OoushTable
                                                    tableData={exercises}
                                                    // @ts-ignore
                                                    defaultData={[deepCloneObject(emptyWorkOutRow[0])]}
                                                    workoutDayId={workout.exerciseDayId}
                                                    searchResults={exerciseSearchResults}
                                                    updateCellMethod={updateUserExercise}
                                                    removeTableRow={removeUserExercise}
                                                    refreshTable={loadDashboard}
                                                    searchApi={handleExerciseSearch}
                                                    clearSearchResults={clearSearchResults}
                                                    denomination={user?.weightDenomination}
                                                    translucentRows
                                                    includeAddRowButton
                                                    includeRemoveRowColumn
                                                    hideIdColumn
                                                    editableTable
                                                />
                                            : <EditableInput
                                                    displayLabel={workout.name}
                                                    defaultLabel="What kind of workout today?"
                                                    type="text"
                                                    id={workout.exerciseDayId}
                                                    handleChangeLabel={setUserWorkoutDayTitle}
                                                />
                                        }
                                        <button
                                            className={styles.overviewcard__button}
                                            onClick={() => handleViewWorkoutDay(workout.exerciseDayId)}
                                            style={{visibility: viewing ? 'hidden' : 'visible'}}
                                        >
                                            View Workout
                                        </button>
                                        {viewing
                                            && <div 
                                                    className={`${styles.divCloseButton} ${styles.dashboardCardCloseButton}`}
                                                    onClick={() => handleViewWorkoutDay(workout.exerciseDayId)}
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
                                const exercises = workout.exercises;
                                const viewing = workout.exerciseDayId === viewedWorkoutDayId;
                                return (
                                    <div
                                        className={viewing
                                            ? styles.weekendcard__selected
                                            : getWeekendCardClassName(idx)} 
                                        key={"workoutDay" + workout.day}
                                    >
                                        <div className={styles.weekendcard__icon}>{workout.day}</div>
                                        {viewing
                                            ? <OoushTable
                                                    tableData={exercises}
                                                    workoutDayId={workout.exerciseDayId}
                                                    removeTableRow={removeUserExercise}
                                                    refreshTable={loadDashboard}
                                                    defaultData={emptyWorkOutRow}
                                                    searchResults={exerciseSearchResults}
                                                    updateCellMethod={updateUserExercise}
                                                    clearSearchResults={clearSearchResults}
                                                    denomination={user?.weightDenomination}
                                                    translucentRows
                                                    includeAddRowButton
                                                    includeRemoveRowColumn
                                                    hideIdColumn
                                                    editableTable
                                                />
                                            : <EditableInput
                                                    displayLabel={workout.name}
                                                    defaultLabel="What kind of workouts today?"
                                                    type="text"
                                                    id={workout.exerciseDayId}
                                                    handleChangeLabel={setUserWorkoutDayTitle}
                                                />
                                        }
                                        <button
                                            className={styles.weekendcard__button}
                                            onClick={() => handleViewWorkoutDay(workout.exerciseDayId)}
                                            style={{visibility: viewing ? 'hidden' : 'visible'}}
                                        >
                                            View Workout
                                        </button>
                                        {viewing 
                                            && <div 
                                                    className={`${styles.divCloseButton} ${styles.dashboardCardCloseButton}`}
                                                    onClick={() => handleViewWorkoutDay(workout.exerciseDayId)}
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
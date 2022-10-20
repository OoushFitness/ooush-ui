import Head from 'next/head'
import styles from '../../styles/dashboard.module.scss'
import {useEffect, useState} from "react";
import {fetchExercises} from "../../service/exercise/exerciseService";

export default function Routines() {

    const [exerciseList, setExerciseList] = useState([]);
    const [fetchExerciseParams, setfetchExerciseParams] = useState({});

    useEffect(() => {
        fetchExercises(fetchExerciseParams).then((response: object) => {
            setExerciseList(response);
        }).catch((error: object) => {
            console.error(error);
        })
    }, [])

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
import Head from 'next/head'
import {useEffect, useState} from "react";
import {fetchExercises} from "../../service/exercise/exerciseService";
import OoushTableRow from "../../src/interfaces/commonInterfaces";
import OoushTable from "../../src/components/ooush-table/ooushTable";
import styles from '../../styles/dashboard.module.scss';

export default function Routines() {

    const [exerciseList, setExerciseList] = useState<OoushTableRow[]>([]);
    const [fetchExerciseParams, setfetchExerciseParams] = useState({});

    const defaultData = [{
        id: null,
    }];

    useEffect(() => {
        loadExerciseTable();
    }, [])

    const loadExerciseTable = () => {
        fetchExercises(fetchExerciseParams).then((response: OoushTableRow[]) => {
            console.log(response)
            setExerciseList(response);
        }).catch((error: object) => {
            console.error(error);
        });
    }

    return (
        <div className={styles.container} style={{ marginTop: "50px" }}>
            <Head>
                <title>Search Routines</title>
                <meta name="description" content="Search routines" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <div className={styles.divRoutinesTableContainer}>
                    <OoushTable
                        tableData={exerciseList}
                        defaultData={defaultData}
                        refreshTable={loadExerciseTable}
                        hideIdColumn
                    />
                </div>
            </main>
        </div>
    )
}
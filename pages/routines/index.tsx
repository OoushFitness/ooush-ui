import Head from 'next/head'
import { useEffect, useState } from "react";
import { fetchExercises } from "../../service/exercise/exerciseService";
import { fetchSearchOptions } from '../../service/bitmap/bitmapService';
import { injectAdditionalTableColumn } from "../../utils/ooush-table-helpers/tableDataHelpers";
import OoushTableRow from "../../src/interfaces/commonInterfaces";
import OoushTable from "../../src/components/ooush-table/ooushTable";
import styles from '../../styles/dashboard.module.scss';

export interface BitmapSearchOption {
    name: string,
    position: number
}

export interface BitmapSearchParameter {
    searchParameter: string,
    searchOptions: BitmapSearchOption[],
}

export default function Routines() {

    const [exerciseList, setExerciseList] = useState<OoushTableRow[]>([]);
    const [bitmapSearchParameters, setBitmapSearchParameters] = useState<BitmapSearchParameter[]>([] as BitmapSearchParameter[]);
    const [fetchExerciseParams, setfetchExerciseParams] = useState({});

    const defaultData = [{
        id: null,
    }];

    useEffect(() => {
        loadExerciseTable();
        loadSearchOptions();
    }, [])

    const loadExerciseTable = () => {
        fetchExercises(fetchExerciseParams).then((response: OoushTableRow[]) => {
            setExerciseList(
                injectAdditionalTableColumn(
                    response,
                    "Add To Workout",
                    <div className={styles.ooushTableAddRowButtonSmall} title="Add new entry"/>
                ) as OoushTableRow[]
            );
        }).catch((error: object) => {
            console.error(error);
        });
    }

    const loadSearchOptions = () => {
        fetchSearchOptions().then((response: BitmapSearchParameter[]) => {
            setBitmapSearchParameters(response);
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
                <div className={styles.divSearchDropdownFieldsContainer}></div>
                <div className={styles.divRoutinesTableContainer}>
                    <div className={styles.searchParametersContainer}>
                        {bitmapSearchParameters.map((bitmapSearchOption: BitmapSearchParameter) => {
                            return (
                                <div className={styles.searchParameterSelectContainer}>
                                    <label htmlFor="pet-select">{bitmapSearchOption.searchParameter}</label>
                                    <select name="pets" id="pet-select">
                                        {bitmapSearchOption.searchOptions.map((option: BitmapSearchOption) => {
                                            return (
                                                <option value={option.position}>{option.name}</option>
                                            );
                                        })}
                                    </select>
                                </div>
                            );
                        })}
                    </div>
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
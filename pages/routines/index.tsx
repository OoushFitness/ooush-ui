import Head from 'next/head'
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../auth/AuthContexts';
import { fetchExercises, updateUserExercise } from "../../service/exercise/exerciseService";
import { fetchSearchOptions } from '../../service/bitmap/bitmapService';
import { injectAdditionalTableColumn } from "../../utils/ooush-table-helpers/tableDataHelpers";
import { parseAddExerciseParams } from '../../utils/ooush-table-helpers/tableCellHelpers';
import { deepCloneObject } from '../../utils/object-helpers/object-helpers';
import OoushTableRow from "../../src/interfaces/commonInterfaces";
import OoushTable from "../../src/components/ooush-table/ooushTable";
import OoushModal from '../../src/components/ooush-modal/ooushModal';
import SimpleDropdown from '../../src/components/simple-dropdown/simpleDropdown';
import SimpleIncrementer from '../../src/components/simple-incrementer/simpleIncrementer';
import SimpleInput from '../../src/components/simple-input/simpleInput';

import { WEEKDAYS } from '../../utils/constants/ooush-constants';

import styles from '../../styles/dashboard.module.scss';

export interface BitmapSearchOption {
    name: string,
    position: number
}

export interface BitmapSearchParameter {
    searchParameter: string,
    searchOptions: BitmapSearchOption[],
}

export interface ExerciseSearchParameterResponse {
    parameterList: BitmapSearchParameter[],
    bitmapPositionCount: number
}

export interface ExerciseSearchParameters {
    searchBitmap: number
}

export interface SearchOptions {
    [key: string]: string | undefined
}

export interface ModalData {
    id: number,
    name: string
}

export interface Weekday {
    id: number,
    name: string
}

export default function Routines() {

    const [exerciseList, setExerciseList] = useState<OoushTableRow[]>([]);
    const [bitmapSearchParameters, setBitmapSearchParameters] = useState<BitmapSearchParameter[]>([] as BitmapSearchParameter[]);
    const [bitmapPositionCount, setBitmapPositionCount] = useState<number>(0);
    const [fetchExerciseParams, setfetchExerciseParams] = useState<ExerciseSearchParameters>({} as ExerciseSearchParameters);
    const [selectedSearchOptions, setSelectedSearchOptions] = useState<SearchOptions>({} as SearchOptions);
    const [addingExercise, setAddingExercise] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<React.ReactNode>();
    const [addExerciseParams, setAddExerciseParams] = useState({});
    const [addExerciseSuccess, setAddExerciseSuccess] = useState(false);

    const defaultData = [{
        id: null,
    }];

    //@ts-ignore
    const { user } = useContext(AuthContext);

    useEffect(() => {
        loadExerciseTable();
        loadSearchOptions();
    }, [])

    const loadExerciseTable = () => {
        const params = deepCloneObject(fetchExerciseParams) as ExerciseSearchParameters;
        fetchExerciseTable(params);
    }

    const searchExerciseTable = (searchBitmap: number) => {
        const params = deepCloneObject(fetchExerciseParams) as ExerciseSearchParameters;
        params.searchBitmap = searchBitmap;
        fetchExerciseTable(params);
    }

    const fetchExerciseTable = (params: object) => {
        fetchExercises(params).then((response: OoushTableRow[]) => {
            setExerciseList(
                injectAdditionalTableColumn(
                    response,
                    "Add To Workout",
                    <div className={styles.ooushTableAddRowButtonSmall} title="Add new entry" />,
                    addExercise
                ) as OoushTableRow[]
            );
        }).catch((error: object) => {
            console.error(error);
        });
    }

    const loadSearchOptions = () => {
        fetchSearchOptions().then((response: ExerciseSearchParameterResponse) => {
            setBitmapSearchParameters(response.parameterList);
            setBitmapPositionCount(response.bitmapPositionCount);
        }).catch((error: object) => {
            console.error(error);
        });
    }

    const setSearchBitmapAndFetchExercises = (group: string, event: React.ChangeEvent<HTMLSelectElement>) => {
        let currentSearchOptions: any = deepCloneObject(selectedSearchOptions);
        currentSearchOptions[group] = Number(event.target.value);
        setSelectedSearchOptions(currentSearchOptions);
        const selectedBitmapPositions = Object.values(currentSearchOptions).filter((entry) => entry !== 0);
        let binarySearchString = "";
        for (let i = bitmapPositionCount; i > 0; i--) {
            if (selectedBitmapPositions.includes(i)) {
                binarySearchString += '1';
            } else {
                binarySearchString += '0';
            }
        }
        const searchBitmap = Number.parseInt(binarySearchString, 2);
        searchExerciseTable(searchBitmap);
    }

    const constructAddExerciseParams = (paramKey: string, value: string | number) => {
        setAddExerciseParams((addExerciseParams) => {
            let newState = deepCloneObject(addExerciseParams);
            // @ts-ignore
            newState[paramKey] = value;
            return newState;
        });
    }

    const addExercise = (data: any | null) => {
        setModalContent(
            <div>
                <div>{data?.name}</div>
                <SimpleDropdown data={WEEKDAYS} labelText={"Select Day"} includeLabel handleParentState={constructAddExerciseParams} dataTag={"exerciseDayId"} />
                <SimpleIncrementer labelText={"Select Reps"} includeLabel handleParentState={constructAddExerciseParams} dataTag={"reps"} />
                <SimpleIncrementer labelText={"Select Sets"} includeLabel handleParentState={constructAddExerciseParams} dataTag={"sets"} />
                <SimpleInput
                    labelText={"Enter Weight"}
                    includeLabel
                    type={"number"}
                    minValue={0}
                    numberDenomination={user.weightDenomination}
                    incrementStep={2.5}
                    handleParentState={constructAddExerciseParams}
                    dataTag={"weight"}
                    defaultValue={0}
                />
            </div>
        );
        setAddingExercise(current => {
            let openingModal = !current;
            setAddExerciseParams(openingModal
                ? {exerciseDayId: 0, reps: 1, sets: 1, exerciseId: data.id, weight: 0}
                : {}
            );
            return openingModal;
        });
    }

    const handleUpdateUserExercise = () => {
        setModalContent(<div>Loading Spinner Stub</div>)
        updateUserExercise(addExerciseParams).then(() => {
            setModalContent(<div>Success</div>)
            setAddExerciseParams({});
            setTimeout(() => setAddingExercise(false), 3000);
        }).catch((error: any) => {
            console.error(error)
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
                            const searchParameterWidth = `calc(95% / ${bitmapSearchParameters.length})`;
                            return (
                                <div className={styles.searchParameterSelectContainer} style={{width: searchParameterWidth}}>
                                    <label htmlFor="exercise-search" className={styles.searchParameterSelectLabel}>{bitmapSearchOption.searchParameter}</label>
                                    <select
                                        name="search"
                                        id="exercise-search"
                                        className={styles.exerciseSearchDropdown}
                                        onChange={(event) => setSearchBitmapAndFetchExercises(bitmapSearchOption.searchParameter, event)}
                                    >
                                        <option value={0}>Select an option</option>
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
                        parseGenericColumnMethodParams={parseAddExerciseParams}
                        genericColumnMethod={addExercise}
                        hideIdColumn
                    />
                </div>
            </main>
            {addingExercise
                && <OoushModal
                        modalTitle={"Add Exercise To Workout Day"}
                        jsxContent={modalContent}
                        modalApiCall={handleUpdateUserExercise}
                        closeModalHandler={() => addExercise(null)}
                    />
            }
        </div>
    )
}
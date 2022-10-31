export const parseExerciseTableCellUpdateParams = (tableRow, exerciseDayId) => {
    const params = {
        exerciseId: tableRow.id,
        exerciseDayId: exerciseDayId,
        name: tableRow.name,
        weight: tableRow.weight,
        reps: tableRow.reps,
        sets: tableRow.sets
    };
    return params;
}

export const parseAddExerciseParams = (tableRow) => {
    const params = {
        id: tableRow.id,
        name: tableRow.name
    };
    return params;
}
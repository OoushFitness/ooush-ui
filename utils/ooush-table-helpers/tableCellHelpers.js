export const parseExerciseTableCellUpdateParams = (tableRow, exerciseDayId) => {
    const params = {
        exerciseId: tableRow.exerciseId,
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
        exerciseId: tableRow.exerciseId,
        name: tableRow.name
    };
    return params;
}
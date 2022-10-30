const parseExerciseTableCellUpdateParams = (tableRow, exerciseDayId) => {
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

export default parseExerciseTableCellUpdateParams;

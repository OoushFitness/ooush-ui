const parseExerciseTableCellUpdateParams = (tableRow, exerciseDayId) => {
    const params = {
        exerciseId: tableRow.id,
        exerciseDayId: exerciseDayId,
        name: tableRow.name,
        weight: tableRow.weight,
        reps: tableRow.reps
    };
    return params;
}

export default parseExerciseTableCellUpdateParams;

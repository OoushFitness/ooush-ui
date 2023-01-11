export interface OoushTableRow {
    [key: string]: string | number | null,
}

export interface OoushUserSettings {
    weightDenomination: string,
}

export interface OoushExercise {
    id: number,
    name: string,
}
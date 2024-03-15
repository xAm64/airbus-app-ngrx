import { Aircraft } from "../models/aircraft.model";

export enum AircraftStateEnum{
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial"
}
export interface AircraftsState{
    aircrafts: Aircraft[],
    errorMessage: string,
    dataState: AircraftStateEnum
}
export const initState: AircraftsState = {
    aircrafts: [],
    errorMessage:"",
    dataState: AircraftStateEnum.INITIAL
}
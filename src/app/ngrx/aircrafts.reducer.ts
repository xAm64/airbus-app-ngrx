import { Action } from "@ngrx/store";
import { AircraftsState, initState, AircraftStateEnum } from "./aircrafts.state";
import { AircraftsActionsTypes } from "../state/aircraft.state";

export function AircraftReducer(state : AircraftsState = initState, action:Action){
    switch (action.type){
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("Loading");
            return {...state, dataState: AircraftStateEnum.LOADING}
        break;
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState: AircraftStateEnum.LOADED, aircrafts: (<AircraftActions> action).payload}
        break;
        case AircraftsActionsTypes.GET_ALL_AIRCTAFTS_ERROR:
            return {...state, dataState: AircraftStateEnum.ERROR, errorMessage : (<AircraftsActions> action).payload}
        break;
        default:
            return {...state}
    }
}
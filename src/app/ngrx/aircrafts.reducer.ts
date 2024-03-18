import { Action } from "@ngrx/store";
import { AircraftsState, initState, AircraftStateEnum } from "./aircrafts.state";
import { AircraftsActionsTypes } from "../state/aircraft.state";
import { AircrafsActions } from "./aircrafts.actions";

export function AircraftReducer(state : AircraftsState = initState, action:Action){
    switch (action.type){
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            console.log("Loading");
            return {...state, dataState: AircraftStateEnum.LOADING}
        break;
        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState: AircraftStateEnum.LOADED, aircrafts:(<AircrafsActions> action).payload}
        break;
        case AircraftsActionsTypes.GET_ALL_AIRCTAFTS_ERROR:
            return {...state, dataState: AircraftStateEnum.ERROR, errorMessage :(<AircrafsActions> action).payload}
        break;
        default:
            return {...state}
    }
}
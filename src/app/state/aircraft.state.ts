export enum DataStateEnum{
    LOADING,
    LOADED,
    ERROR
}




export enum AircraftsActionsTypes {
    GET_ALL_AIRCRAFTS = "[Aircrafts] Get All Aircrafts",
    GET_DESIGNED_AIRCRAFTS = "[Aircrafts] Get Designed Aircrafts",
    GET_DEVELOPMENT_AIRCRAFTS = "[Aircrafts] Get Developed Aircrafts",
    GET_SEARCH_AIRCRAFTS = "[Aircrafts] Get Search Aircrafts",
    GET_ALL_AIRCRAFTS_SUCCESS = "GET_ALL_AIRCRAFTS_SUCCESS",
    GET_ALL_AIRCTAFTS_ERROR = "GET_ALL_AIRCTAFTS_ERROR"
}

export interface AppDataState<T>{
    dataState? : DataStateEnum,
    data? : T,
    errorMessage?: string
}

export interface ActionEvent {
    type : AircraftsActionsTypes,
    payload : any
}
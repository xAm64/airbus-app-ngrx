import { Injectable } from "@angular/core";
import { AircraftService } from "../services/aircraft.service";
import { Actions } from "@ngrx/effects";
import { Observable, catchError, mergeMap } from "rxjs";
import { AircraftsActionsTypes, GetAllAircraftsActionError, GetAllAircraftsActionSuccess } from "./aircrafts.actions";

@Injectable ()
export class AircraftsEffects{
    constructor(private aircraftService:AircraftService, private effectAction: Actions){}

    getAllAircraftsEffect:Observable<Action> = createEffect (
        () => this.effectAction.pipe(
            ofType(AircraftsActionsTypes.GET_ALL_AIRCRAFTS),
            mergeMap((action) => {
                return this.aircraftService.getAircrafts().pipe(
                    map((aircrafts) => new GetAllAircraftsActionSuccess(aircrafts)),
                    catchError((err)=> of(new GetAllAircraftsActionError(err.message)))
                )
            })
        )
    )
}
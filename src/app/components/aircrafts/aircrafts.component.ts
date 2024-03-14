import { Component, OnInit } from '@angular/core';
import { Observable, catchError, startWith, map, of } from 'rxjs';
import { Aircraft } from 'src/app/models/aircraft.model';
import { AircraftService } from 'src/app/services/aircraft.service';
import { ActionEvent, AircraftsActionsTypes, AppDataState, DataStateEnum } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircrafts$: Observable<AppDataState<Aircraft[]>> | null = null;
  error = null;
  readonly dataStateEnum = DataStateEnum;
  constructor(private aircraftService:AircraftService) { }

  ngOnInit(): void {
  }

  onActionEvent($actionEvent : ActionEvent){
    switch($actionEvent.type){
      case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
        this.getAllCrafts();
      break;
      case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
        this.getDesignedAircrafts();
      break;
      case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
        this.getDeveloppementAircrafts();
      break;
      case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS:
        this.search($actionEvent.payload);
      break;
    }
  }

  getAllCrafts(){
    this.aircrafts$ = this.aircraftService.getAircrafts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }
  getDesignedAircrafts(){
    this.aircrafts$ = this.aircraftService.getDesignedAircrafts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }
  getDeveloppementAircrafts(){
    this.aircrafts$ = this.aircraftService.getDeveloppementAircrafts().pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

  search(value: any){
    this.aircrafts$ = this.aircraftService.onSearch(value).pipe(
      map(data => ({dataState: DataStateEnum.LOADED, data:data})),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err => of({dataState:DataStateEnum.ERROR, errorMessage: err.message}))
    );
  }

}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ActionEvent, AircraftsActionsTypes } from './aircraft.state';
import { AircraftService } from '../services/aircraft.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventSubject:Subject<ActionEvent> = new Subject<ActionEvent>();
  eventSubjectObservable = this.eventSubject.asObservable();

  publishEvent(event:ActionEvent){
    this.eventSubject.next(event);
  }
  constructor() { }

  //récupère l'info envoyé vers event service.
  /*ngOnInit(): void {
    this.eventService.eventSubjectObservable.subscribe((actionEvent:ActionEvent) => {
      this.onActionEvent(actionEvent);
    });
  }
  //envoyer l'info vers event service.
  getAllAircrafts(){
    this.eventService.publishEvent({type:AircraftsActionsTypes.GET_ALL_AIRCRAFTS, payload : null})
  }*/
}

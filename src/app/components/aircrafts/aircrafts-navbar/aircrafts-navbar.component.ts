import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllAircraftsAction } from 'src/app/ngrx/aircrafts.actions';
import { AircraftsActionsTypes } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  value: string = "";
  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();

  constructor(private store:Store<any>) { }

  ngOnInit(): void {
  }

  getAllCrafts(){
    this.store.dispatch(new GetAllAircraftsAction({}))
  }
  getDesignedAircrafts(){
    //this.eventService.publishEvent({type: AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS, payload: null});
  }
  getDeveloppementAircrafts(){
    //this.eventService.publishEvent({type: AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS, payload: null});
  }

  onSearch(value:any){
    //this.eventService.publishEvent({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, payload : value});
  }

}


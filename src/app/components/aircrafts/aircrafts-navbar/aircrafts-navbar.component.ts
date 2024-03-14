import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { AircraftsActionsTypes } from 'src/app/state/aircraft.state';

@Component({
  selector: 'app-aircrafts-navbar',
  templateUrl: './aircrafts-navbar.component.html',
  styleUrls: ['./aircrafts-navbar.component.css']
})
export class AircraftsNavbarComponent implements OnInit {
  @Output() eventEmitter : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getAllCrafts(){
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_ALL_AIRCRAFTS, payload : null});
  }
  getDesignedAircrafts(){
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS});
  }
  getDeveloppementAircrafts(){
    this.eventEmitter.emit({type: AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS});
  }

  onSearch(value:any){
    this.eventEmitter.emit({type : AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS, plyload : value.search});
  }

}


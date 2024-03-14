import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

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
    this.eventEmitter.emit("ALL_AIRCRAFTS");
  }
  getDesignedAircrafts(){
    this.eventEmitter.emit("ALL_DISIGNED");
  }
  getDeveloppementAircrafts(){
    this.eventEmitter.emit("ALL_DEVELOPPEMENT");
  }

}


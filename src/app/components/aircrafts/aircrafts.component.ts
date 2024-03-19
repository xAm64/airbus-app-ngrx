import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AircraftStateEnum } from 'src/app/ngrx/aircrafts.state';
import { AircraftsState } from 'src/app/ngrx/aircrafts.state';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {
  aircraftsState$:Observable<AircraftsState> | null = null;
  readonly aircraftsStateEnum = AircraftStateEnum;
  constructor(private store:Store<any>) { }

  ngOnInit(): void {
    this.aircraftsState$ = this.store.pipe(
      map((state) => state.airbusState)
    );
  }

}

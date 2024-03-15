import { Component } from '@angular/core';
import { AircraftReducer } from './ngrx/aircrafts.reducer';
import { StoreModule } from '@ngrx/store';
import { AircraftsEffects } from './ngrx/aircrafts.effects';
import { EffectsModule } from '@ngrx/effects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  StoreModule.forRoot({airbusState: AircraftReducer}),
  EffectModule.forRoot([AircraftsEffects])
})
export class AppComponent {
  title = 'airbus-app-ngrx';
}

import {Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-housing-location',
  imports: [RouterLink],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocationCo.photo"
        alt="Exterior photo of {{ housingLocationCo.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocationCo.name }}</h2>
      <p class="listing-location">{{ housingLocationCo.city }}, {{ housingLocationCo.state }}</p>
      <a [routerLink]="['/details', housingLocationCo.id]">View Details</a> 
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})

export class HousingLocationComponent {
  @Input() housingLocationCo!: HousingLocation;
}

export interface HousingLocation {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

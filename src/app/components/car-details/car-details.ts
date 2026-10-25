import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Auto } from '../../interfaces/auto';
import { AUTOS } from '../../data/auto';

@Component({
  imports: [RouterLink],
  selector: 'app-car-details',
  styleUrl: './car-details.css',
  templateUrl: './car-details.html',
})
export class CarDetails implements OnInit {
  @Input() id = '';

  car: Auto | undefined;

  ngOnInit() {
    this.car = AUTOS.find((auto: Auto) => auto.id === Number(this.id));
  }

  reserve() {
    if (this.car && this.car.availability > 0) {
      this.car.availability--;
    }
  }
}
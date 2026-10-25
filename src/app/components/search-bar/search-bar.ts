import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';
@Component({
  imports: [FontAwesomeModule, RouterLink],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;

  @Input() autos: Auto[] = []

  selectedAutos: Auto[] = []

  ngOnInit() {
    this.selectedAutos = this.autos
  }

  selectAutos(selectedBrand: string, sortOrder: string) {
    if (selectedBrand) {
      this.selectedAutos = this.autos.filter(
        auto => auto.brand.toLowerCase().startsWith(selectedBrand.toLowerCase()))
    }
    else
      this.selectedAutos = this.autos

    if (sortOrder === 'asc') {
      this.selectedAutos = this.selectedAutos.slice().sort((a, b) => a.price - b.price)
    }
    else if (sortOrder === 'desc') {
      this.selectedAutos = this.selectedAutos.slice().sort((a, b) => b.price - a.price)
    }
  }
}
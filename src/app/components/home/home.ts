import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';
import { Auto } from '../../interfaces/auto';
import { AUTOS } from '../../data/auto';


@Component({
  imports: [SearchBar],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  autoList:Auto[] = AUTOS;
}

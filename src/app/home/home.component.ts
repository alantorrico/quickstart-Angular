import {Component, OnInit} from '@angular/core';
import {ClothesService} from '../services/clothes.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClothesService]
})
export class HomeComponent implements OnInit {

  public newClothes = '';

  constructor(private clothesService: ClothesService) {
  }

  ngOnInit() {
  }

  addNewClothes(newClothes: string) {
    if (newClothes.length) {
      this.clothesService.addClothes(newClothes);
      this.newClothes = '';
    }
  }

  deleteClothes(index: number) {
    this.clothesService.deleteClothes(index);
  }
}

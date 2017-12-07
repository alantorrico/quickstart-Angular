import {Injectable} from '@angular/core';

@Injectable()
export class ClothesService {
  listClothes: string[] = ['White Shorts', 'Red Shorts'];

  addClothes(name: string) {
    this.listClothes.unshift(name);
  }

  getAllClothes() {
    return this.listClothes;
  }

  deleteClothes(index: number) {
    this.listClothes.splice(index, 1);
  }
}

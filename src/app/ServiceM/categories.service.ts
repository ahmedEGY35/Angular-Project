import { Injectable } from '@angular/core';
import { category } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  getCategories():Array<category>{
    return [
      {
        id:1,
        Name:"Hp Labtop",
        Description:"FHD 1080p,60 Hz Nvidia GEFORCE MX 130,Intel UHD 12GB ram ,1T HDD wifi included",
        Price:15000,
        Image:"../assets/Images/labp11.jpg"
      },
      {
        id:2,
        Name:"Swiss Watch",
        Description:"this product is a smart watch that is water & dust proof premium quality materials & crafts",
        Price:5000,
        Image:"../assets/Images/prd2.jpg"
      },
      {
        id:3,
        Name:"Samsung Z Flip",
        Description:"Named One of time’s Best Inventions of 2021,Flips open to full-screened 5G smartphone",
        Price:25000,
        Image:"../assets/Images/pro3.jpg"
      },
      {
        id:4,
        Name:"Sony PS5",
        Description:"Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion plus haptic feedback",
        Price:21000,
        Image:"../assets/Images/pro4.jpg"
      }
    ];
  }
}

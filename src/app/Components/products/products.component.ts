import { Component, OnInit } from '@angular/core';
import { category } from 'src/app/Interfaces/category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  categories:Array<category>=[];
  id:number=1;
  ACName:string='';
  ACDes:string='';
  ACPrice:number=0;
  ACImg:string='';
  constructor(private router: Router) { }
  addc(){
    this.categories.push({
      id:this.id,
      Name:this.ACName,
      Description:this.ACDes,
      Price:this.ACPrice,
      Image:this.ACImg
    });
    this.id++;
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}

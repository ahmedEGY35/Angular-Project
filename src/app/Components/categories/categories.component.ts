import { Component, OnInit } from '@angular/core';
import { findIndex } from 'rxjs';
import { category } from 'src/app/Interfaces/category';
import { CategoriesService } from 'src/app/ServiceM/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories:Array<category>=[]
  constructor(private categoryService:CategoriesService) { }
  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
  }
  id:number=1;
  ACName:string='';
  ACDes:string='';
  ACPrice:number=0;
  ACImg:string='';
  addc(){
    this.categories.push({
      id:this.id,
      Name:this.ACName,
      Description:this.ACDes,
      Price:this.ACPrice,
      Image:this.ACImg
    });
    this.id++;
  }
  deletecategory(id:number){
    let ins= this.categories.findIndex((x)=>x.id==id);
    this.categories.splice(ins,1);
  }
}

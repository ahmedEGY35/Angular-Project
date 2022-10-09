import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { category } from 'src/app/Interfaces/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  atcv:boolean=false;
  constructor() { }
  @Input() category:category={} as category;
  @Output() DE = new EventEmitter<number>();
  ngOnInit(): void {
  }

}

import { Component, OnInit ,Input} from '@angular/core';
import { category } from 'src/app/Interfaces/category';
import { CartitemService } from 'src/app/ServiceM/cartitem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input()product:category={} as category;

  constructor(private cart:CartitemService) { }
  ngOnInit(): void {
  }
  atc(product : category){
    this.cart.addPro(product);
  }
}

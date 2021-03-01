import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsInfoService } from '../products-info.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any;
  selectedProductId: number;
  hidden: boolean = false;
  // @ViewChild('productsContainer') productsContainer: HTMLElement;

  constructor(private products: ProductsInfoService) { }


  openProductDetails(id: number) {
    console.log(id);
    this.selectedProductId = id;
    this.hidden = !this.hidden;
  }

  hideDetails(hide: any) {
    console.log(hide);
    this.hidden = hide;
  }

  ngOnInit(): void {
    this.productList = this.products.getProducts();
  }

}

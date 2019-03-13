import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product

  constructor(private _productService: ProductService, private _ar: ActivatedRoute) { }

  ngOnInit() {
    this._ar.paramMap.subscribe(routeData => {
      this._productService.getProductById(routeData.get('id')).subscribe((singleProduct: Product) => {
        this.product = singleProduct;
      });
    });
  }

}

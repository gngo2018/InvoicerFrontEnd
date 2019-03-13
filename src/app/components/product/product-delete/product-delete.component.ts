import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product;

  constructor(
    private _productService: ProductService,
    private _ar: ActivatedRoute,
    private _router: Router,) {
      this._ar.paramMap.subscribe(p => {
        this._productService.getProductById(p.get('id')).subscribe((singleProduct: Product) => {
          this.product = singleProduct;
        });
      });
   }

  ngOnInit() {
  }

  onDelete() {
    this._productService.deleteProduct(this.product.ProductId).subscribe(() => {
      this._router.navigate(['/product']);
    });
  }

}

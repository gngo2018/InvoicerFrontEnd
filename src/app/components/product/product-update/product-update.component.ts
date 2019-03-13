import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product;
  editProductForm: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _productService: ProductService,
    private _ar: ActivatedRoute,
    private _router: Router) {
      this._ar.paramMap.subscribe(p => {
        this._productService.getProductById(p.get('id')).subscribe((singleProduct: Product) => {
          this.product = singleProduct;
          this.createForm();
        });
      });
     }

  ngOnInit() {
  }

  createForm(){
    this.editProductForm = this._form.group({
      ProductId: new FormControl(this.product.ProductId),
      ProductName: new FormControl(this.product.ProductName),
      ProductPrice: new FormControl(this.product.ProductPrice),
      Quantity: new FormControl(this.product.Quantity)
    });
  }

  onSubmit(form){
    const updateProduct: Product = {
      ProductId: form.value.ProductId,
      ProductName: form.value.ProductName,
      ProductPrice: form.value.ProductPrice,
      Quantity: form.value.Quantity
    };
    this._productService.updateProduct(updateProduct).subscribe(d => {
      this._router.navigate(['/product']);
    });
  }
}

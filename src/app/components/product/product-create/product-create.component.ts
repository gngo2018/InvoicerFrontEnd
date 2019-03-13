import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(private _productService: ProductService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.productForm = this._form.group({
      ProductName: new FormControl,
      ProductPrice: new FormControl,
      Quantity: new FormControl,
    });
  }

  onSubmit(){
    console.log(this.productForm.value)
    this._productService.createProduct(this.productForm.value).subscribe(data => {
      this._router.navigate(['/product']);
    });
  }

}

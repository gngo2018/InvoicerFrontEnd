import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  columnNames = ['details', 'ProductName', 'ProductPrice', 'Quantity', 'TotalPrice', 'buttons'];
  dataSource: MatTableDataSource<Product>

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) =>{
      this.dataSource = new MatTableDataSource<Product>(products);
  });
  }
}

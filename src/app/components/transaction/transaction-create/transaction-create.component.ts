import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Invoice } from 'src/app/models/Invoice';
import { Product } from 'src/app/models/Product';
import { MatTableDataSource } from '@angular/material';
import { TransactionService } from 'src/app/services/transaction.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  transactionForm: FormGroup;
  invoiceSelect: Invoice[];
  productSelect: Product[];
  dataSource: MatTableDataSource<Invoice>;

  constructor(private _transactionService: TransactionService,
    private _getInvoiceService: InvoiceService,
    private _getProductService: ProductService,
    private _form: FormBuilder,
    private _router: Router,
    private _ar: ActivatedRoute) 
    { 
      this.createForm();
    }

  ngOnInit() {
    this._getInvoiceService.getInvoices().subscribe(res =>{this.invoiceSelect = res as Invoice[]; console.log(this.invoiceSelect)})
    this._getProductService.getProducts().subscribe(p => this.productSelect = p as Product[])
  }

  createForm(){
    this.transactionForm = this._form.group({
      InvoiceId: Number,
      ProductId: Number
    })
  }

  onSubmit(){
    console.log(this.transactionForm.value)
    this._transactionService.createTransaction(this.transactionForm.value).subscribe(data => {
      this._router.navigate(['/invoice/detail/' + this.transactionForm.value.InvoiceId])
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { InvoiceDetail } from 'src/app/models/InvoiceDetail';
import { Invoice } from 'src/app/models/Invoice';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  
  columnNames = ['details', 'ProductName', 'ProductPrice', 'Quantity', 'TotalPrice', 'buttons'];
  dataSource: MatTableDataSource<Invoice>
  invoice: InvoiceDetail

  constructor(private _invoiceService: InvoiceService, private _getProductService: ProductService, private _ar: ActivatedRoute) { }

  ngOnInit() {
    this._ar.paramMap.subscribe(routeData => {
      this._invoiceService.getInvoiceById(routeData.get('id')).subscribe((singleInvoice: InvoiceDetail) => {
        this.invoice = singleInvoice;
      });
    });
    this._ar.paramMap.subscribe(routeData =>{
      this._invoiceService.getInvoiceById(routeData.get('id')).subscribe((invoices: InvoiceDetail[]) =>{
        this.dataSource = new MatTableDataSource<InvoiceDetail>(invoices);
      });
    });
  }

}

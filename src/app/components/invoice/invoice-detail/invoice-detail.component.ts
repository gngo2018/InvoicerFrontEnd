import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css']
})
export class InvoiceDetailComponent implements OnInit {
  
  columnNames = ['details', 'ProductName', 'ProductPrice', 'Quantity', 'TotalPrice', 'buttons'];
  dataSource: MatTableDataSource<Invoice>
  invoice: Invoice

  constructor(private _invoiceService: InvoiceService, private _ar: ActivatedRoute) { }

  ngOnInit() {
    this._ar.paramMap.subscribe(routeData => {
      this._invoiceService.getInvoiceById(routeData.get('id')).subscribe((singleInvoice: Invoice) => {
        this.invoice = singleInvoice;
      });
    });
  }

}

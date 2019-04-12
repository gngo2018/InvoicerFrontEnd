import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Invoice } from 'src/app/models/Invoice';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  columnNames = ['details', 'InvoiceId', 'CompanyName', 'BillName', 'CreatedUtc', 'buttons'];
  dataSource: MatTableDataSource<Invoice>

  constructor(private _invoiceService: InvoiceService) { }

  ngOnInit() {
    this._invoiceService.getInvoices().subscribe((invoices: Invoice[]) =>{
      this.dataSource = new MatTableDataSource<Invoice>(invoices);
    });
  }
}

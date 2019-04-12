import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-delete',
  templateUrl: './invoice-delete.component.html',
  styleUrls: ['./invoice-delete.component.css']
})
export class InvoiceDeleteComponent implements OnInit {

  invoice: Invoice;

  constructor(
    private _invoiceService: InvoiceService,
    private _ar: ActivatedRoute,
    private _router: Router) 
    {
      this._ar.paramMap.subscribe(p => {
        this._invoiceService.getInvoiceById(p.get('id')).subscribe((singleInvoice: Invoice) => {
          this.invoice = singleInvoice;
        });
      });
    }

  ngOnInit() {
  }

  onDelete() {
    this._invoiceService.deleteInvoice(this.invoice.InvoiceId).subscribe(() => {
      this._router.navigate(['/invoice']);
    });
  }

}

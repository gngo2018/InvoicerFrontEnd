import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/models/Invoice';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-update',
  templateUrl: './invoice-update.component.html',
  styleUrls: ['./invoice-update.component.css']
})
export class InvoiceUpdateComponent implements OnInit {

  invoice: Invoice;
  editInvoiceForm: FormGroup;

  constructor(
    private _form: FormBuilder,
    private _invoiceService: InvoiceService,
    private _ar: ActivatedRoute,
    private _router: Router
  )
  {
    this._ar.paramMap.subscribe(i => {
      this._invoiceService.getInvoiceById(i.get('id')).subscribe((singleInvoice: Invoice) => {
        this.invoice = singleInvoice;
        this.createForm();
      });
    });
  }

  ngOnInit() {
  }

  createForm(){
    this.editInvoiceForm = this._form.group({
      InvoiceId: new FormControl(this.invoice.InvoiceId),
      CompanyName: new FormControl(this.invoice.CompanyName),
      CompanyAddress: new FormControl(this.invoice.CompanyAddress),
      BillName: new FormControl(this.invoice.BillName),
      BillAddress: new FormControl(this.invoice.BillAddress),
    });
  }

  onSubmit(form){
    const updateInvoice: Invoice = {
      InvoiceId: form.value.InvoiceId,
      CompanyName: form.value.CompanyName,
      CompanyAddress: form.value.CompanyAddress,
      BillName: form.value.BillName,
      BillAddress: form.value.BillAddress
    };
    this._invoiceService.updateInvoice(updateInvoice).subscribe(i => {
      this._router.navigate(['/invoice']);
    });
  }

}

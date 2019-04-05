import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { InvoiceService } from 'src/app/services/invoice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invoice-create',
  templateUrl: './invoice-create.component.html',
  styleUrls: ['./invoice-create.component.css']
})
export class InvoiceCreateComponent implements OnInit {

  invoiceForm: FormGroup;

  constructor(private _invoiceService: InvoiceService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.invoiceForm = this._form.group({
      CompanyName: new FormControl,
      CompanyAddress: new FormControl,
      BillName: new FormControl,
      BillAddress: new FormControl
    });
  }

  onSubmit(){
    this._invoiceService.createInvoice(this.invoiceForm.value).subscribe(data => {
      this._router.navigate(['/invoice']);
    });
  }
}

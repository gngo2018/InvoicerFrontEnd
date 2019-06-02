import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatTableModule,
  MatOptionModule,
  MatSelectModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ProductComponent } from './components/product/product.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { InvoiceService } from './services/invoice.service';
import { ProductService } from './services/product.service';
import { TransactionService } from './services/transaction.service';
import { AuthGuard } from './components/guards/auth.guard';
import { InvoiceCreateComponent } from './components/invoice/invoice-create/invoice-create.component';
import { InvoiceDetailComponent } from './components/invoice/invoice-detail/invoice-detail.component';
import { InvoiceDeleteComponent } from './components/invoice/invoice-delete/invoice-delete.component';
import { InvoiceUpdateComponent } from './components/invoice/invoice-update/invoice-update.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { TransactionDeleteComponent } from './components/transaction/transaction-delete/transaction-delete.component';
import { TransactionCreateComponent } from './components/transaction/transaction-create/transaction-create.component';
import { TransactionDetailComponent } from './components/transaction/transaction-detail/transaction-detail.component';
import { TransactionUpdateComponent } from './components/transaction/transaction-update/transaction-update.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InvoiceComponent,
    ProductComponent,
    TransactionComponent,
    RegisterComponent,
    LoginComponent,
    InvoiceCreateComponent,
    InvoiceDetailComponent,
    InvoiceDeleteComponent,
    InvoiceUpdateComponent,
    ProductUpdateComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductDeleteComponent,
    TransactionDeleteComponent,
    TransactionCreateComponent,
    TransactionDetailComponent,
    TransactionUpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    InvoiceService,
    ProductService,
    TransactionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

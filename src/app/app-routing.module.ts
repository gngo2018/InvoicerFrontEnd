import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { ProductComponent } from './components/product/product.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
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

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'invoice', children: [ 
    {path: '', component: InvoiceComponent},
    {path: 'create', component: InvoiceCreateComponent},
    {path: 'detail/:id', component: InvoiceDetailComponent},
    {path: 'update/:id', component: InvoiceUpdateComponent},
    {path: 'delete/:id', component: InvoiceDeleteComponent}
  ]},
  {path: 'product', children:[
     {path: '', component: ProductComponent},
     {path: 'create', component: ProductCreateComponent},
     {path: 'detail/:id', component: ProductDetailComponent},
     {path: 'update/:id', component: ProductUpdateComponent},
     {path: 'delete/:id', component: ProductDeleteComponent}
    ]},
  {path: 'transaction', children:[
   {path: 'create',component: TransactionCreateComponent},
   {path: 'index', component:TransactionComponent}
  ]},
  //Home Default Path
  {path: '', component: HomeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

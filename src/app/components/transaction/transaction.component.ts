import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/Transaction';
import { MatTableDataSource } from '@angular/material';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  columnNames = ['details', 'InvoiceId', 'ProductId', 'buttons'];
  dataSource: MatTableDataSource<Transaction>

  constructor(private _transactionService: TransactionService) { }

  ngOnInit() {
    this._transactionService.getTransactions().subscribe((transactions: Transaction[]) => {
      this.dataSource = new MatTableDataSource<Transaction>(transactions);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { accounts } from '../accounts';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  account:  accounts[];
  selectedAccounts:  accounts  = { id :  null , name:null, amount:  null};

  constructor() { }

  ngOnInit(): void {
    this.apiService.readAccount().subscribe((account: accounts[])=>{
      this.account = account;
      console.log(this.account);
    })

  }
  createOrUpdateAccounts(form){
    if(this.selectedAccounts&& this.selectedAccounts.id){
      form.value.id = this.selectedAccounts.id;
      this.apiService.updateAccounts(form.value).subscribe((accounts: accounts)=>{
        console.log("account updated" , accounts);
      });
    }
    else{

      this.apiService.createAccounts(form.value).subscribe((accounts: accounts)=>{
        console.log("account created, ", accounts);
      });
    }

  }

  selectPolicy(accounts: accounts){
    this.selectedAccounts =accounts;
  }

  deleteAccounts(id){
    this.apiService.deleteAccounts(id).subscribe((accounts: accounts)=>{
      console.log("account deleted, ", accounts);
    });

  }
}

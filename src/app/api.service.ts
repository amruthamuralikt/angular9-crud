import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { accounts } from  './accounts';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "http://127.0.0.1:8080";
  constructor() { }
  
  readAccount(): Observable<accounts[]>{
    return this.httpClient.get<accounts[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }
  createAccounts(accounts: accounts): Observable<accounts>{
    return this.httpClient.post<accounts>(`${this.PHP_API_SERVER}/api/insert.php`,accounts);
  }
  updatePolicy(accounts: accounts){
    return this.httpClient.put<accounts>(`${this.PHP_API_SERVER}/api/update.php`, accounts);   
  }
  deleteAccounts(id: number){
    return this.httpClient.delete<accounts>(`${this.PHP_API_SERVER}/api/delete.php/?id=${id}`);
  }
}

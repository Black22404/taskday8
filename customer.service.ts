import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  logCustomerDetails(customer: any): void {
    console.log(`User: ${customer.username}, Phone: ${customer.phone}`);
  }
}

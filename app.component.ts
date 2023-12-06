import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'creationlist';

  customer: any[] = [
    { name: "kuhuk", username: "ygjyg", phone: "31654" }
  ];

  constructor(private customerService: CustomerService) {}

  addCustomer() {
    const newCustomer = { name: "new", username: "new", phone: "6566" };
    this.customer.push(newCustomer);
    console.log("Added new customer:", newCustomer);
  }

  deleteCustomer(index: number): void {
    // Your delete logic here
    if (index >= 0 && index < this.customer.length) {
      const deletedCustomer = this.customer.splice(index, 1)[0];
      console.log("Deleted customer:", deletedCustomer);
    } else {
      console.error("Invalid index for deleting customer");
    }
  }

  viewCustomerDetails(customer: any): void {
    // You can customize this based on how you want to display the details (e.g., alert, modal, etc.)
    this.customerService.logCustomerDetails(customer);
  }

  // Function to update a customer
  updateCustomer(customer: any): void {
    // Your update logic here
  }
}

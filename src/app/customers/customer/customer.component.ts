import { Component, OnInit } from "@angular/core";
import { CustomerService } from "../../shared/customer.service";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  constructor(
    private service: CustomerService,
    public dialogRef: MatDialogRef<CustomerComponent>
  ) {}

  ngOnInit() {
    this.service.getCustomers();
  }
  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get("$key").value)
        this.service.insertCustomer(this.service.form.value);
      else this.service.updateCustomer(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

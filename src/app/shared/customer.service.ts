import { Injectable } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private firebase: AngularFireDatabase) {}

  customerList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    gender: new FormControl("1"),
    email: new FormControl("", [Validators.required, Validators.email]),
    address: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    order: new FormControl("", Validators.required)
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      firstName: "",
      lastName: "",
      gender: "1",
      email: "",
      address: "",
      city: "",
      state: "",
      order: ""
    });
  }

  getCustomers() {
    this.customerList = this.firebase.list("customers");
    return this.customerList.snapshotChanges();
  }
  insertCustomer(customer) {
    this.customerList.push({
      firstName: customer.firstName,
      lastName: customer.lastName,
      gender: customer.gender,
      email: customer.email,
      address: customer.address,
      city: customer.city,
      state: customer.state,
      order: customer.order
    });
  }
  updateCustomer(customer) {
    this.customerList.update(customer.$key, {
      firstName: customer.firstName,
      lastName: customer.lastName,
      gender: customer.gender,
      email: customer.email,
      address: customer.address,
      city: customer.city,
      state: customer.state,
      order: customer.order
    });
  }

  removeCustomer($key: string) {
    this.customerList.remove($key);
  }

  populateForm(customer) {
    this.form.setValue(customer);
  }
}

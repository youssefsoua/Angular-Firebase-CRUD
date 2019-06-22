import { Component, OnInit, ViewChild } from "@angular/core";
import { CustomerService } from "../../shared/customer.service";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { CustomerComponent } from "./../customer/customer.component";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"]
})
export class CustomersListComponent implements OnInit {
  constructor(private service: CustomerService, private dialog: MatDialog) {}
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    "firstName",
    "lastName",
    "address",
    "city",
    "state",
    "order",
    "actions"
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.service.getCustomers().subscribe(list => {
      let array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      this.dataSource = new MatTableDataSource(array);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = (data, filter) => {
        return this.displayedColumns.some(ele => {
          return (
            ele != "actions" && data[ele].toLowerCase().indexOf(filter) != -1
          );
        });
      };
    });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CustomerComponent, dialogConfig);
  }
  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(CustomerComponent, dialogConfig);
  }

  onDelete($key) {
    this.service.removeCustomer($key);
  }
}

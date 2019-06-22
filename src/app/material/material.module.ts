import { NgModule } from "@angular/core";

import {
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatSortModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatRadioModule,
  MatPaginatorModule
} from "@angular/material";

const materialComponents = [
  MatToolbarModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSortModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatRadioModule,
  MatPaginatorModule
];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule {}

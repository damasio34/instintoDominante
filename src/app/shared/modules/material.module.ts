import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSliderModule,
  MatSnackBarModule,
  MatToolbarModule,

  MAT_SNACK_BAR_DEFAULT_OPTIONS
} from '@angular/material';

@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class MaterialModule { }

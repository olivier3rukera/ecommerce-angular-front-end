import { NgModule } from  '@angular/core';
import {CommonModule} from '@angular/common';
import {MatMenuModule,MatSidenavModule,MatStepperModule,MatNativeDateModule,MatSnackBarModule,MatIconModule,MatDialogModule, MatButtonModule, MatTableModule, MatPaginatorModule , MatSortModule,MatTabsModule, MatCheckboxModule, MatToolbarModule, MatCard, MatCardModule, MatFormField, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from  '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';

import {MatDatepickerModule} from  '@angular/material/datepicker';
import {MatRadioModule} from  '@angular/material/radio';
import {MatSelectModule} from  '@angular/material/select';
import {MatSliderModule} from  '@angular/material/slider';
import {MatDividerModule} from  '@angular/material/divider';
import {MatListModule} from '@angular/material'
import {MatGridListModule, MatRippleModule,MatChipsModule} from '@angular/material'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material';

import {StarRatingComponent} from './star-rating-angular/star-rating/star-rating.component'
@NgModule({
imports: [CommonModule,MatMenuModule,MatTooltipModule,MatExpansionModule,MatGridListModule,MatSlideToggleModule,MatSidenavModule,MatRippleModule,MatChipsModule,MatListModule,MatStepperModule,MatTabsModule,MatDividerModule,MatSliderModule,
  MatSelectModule,MatRadioModule,MatNativeDateModule,MatDatepickerModule,
  MatSnackBarModule,MatIconModule,MatDialogModule,MatProgressSpinnerModule,MatButtonModule,
  MatSortModule,MatTableModule,MatTabsModule, MatCheckboxModule, 
  MatToolbarModule, MatCardModule, MatFormFieldModule, 
  MatProgressSpinnerModule, MatInputModule, MatPaginatorModule],
exports: [MatMenuModule,MatStepperModule,MatGridListModule,MatSidenavModule,MatChipsModule,MatRippleModule,MatListModule,MatTabsModule,MatDividerModule,MatSliderModule,MatSelectModule,MatRadioModule,
  MatNativeDateModule,MatDatepickerModule,MatSnackBarModule,MatIconModule,
  MatDialogModule,MatProgressSpinnerModule,MatExpansionModule,MatButtonModule,MatSlideToggleModule,MatSortModule,
   MatCheckboxModule, MatToolbarModule, MatCardModule,MatTableModule,MatTabsModule, 
   MatFormFieldModule, MatProgressSpinnerModule,MatTooltipModule ,MatInputModule, MatPaginatorModule, StarRatingComponent],
   declarations : [StarRatingComponent]

})
export class AngularMaterialModule { }

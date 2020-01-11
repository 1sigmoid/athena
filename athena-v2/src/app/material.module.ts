import { NgModule } from "@angular/core";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatStepperModule } from "@angular/material/stepper";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTabsModule, MatTab } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete'

@NgModule({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}

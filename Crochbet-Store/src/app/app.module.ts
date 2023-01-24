import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotFoundErrorComponent } from './website/components/not-found-error/not-found-error.component';
import { LayoutComponent } from './website/components/layout/layout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';


import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundErrorComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    //added here too
    ReactiveFormsModule ,
    MatDialogModule,
    MatTableModule,
    NgbModule,
    QuicklinkModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }

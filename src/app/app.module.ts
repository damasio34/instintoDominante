import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { NgxEchartsModule } from 'ngx-echarts';

import { MaterialModule } from './shared/modules/material.module';
import { AppComponent } from './app.component';
import { QuestionarioComponent } from './components/questionario/questionario.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionarioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    MaterialModule,
    NgxEchartsModule,

    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [QuestionarioComponent]
})
export class AppModule { }

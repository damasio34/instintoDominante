import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from './../../shared/modules/material.module';
import { QuestionarioComponent } from './questionario.component';

describe('QuestionarioComponent', () => {
  let component: QuestionarioComponent;
  let fixture: ComponentFixture<QuestionarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, ReactiveFormsModule, NgxEchartsModule ],
      declarations: [ QuestionarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });
});

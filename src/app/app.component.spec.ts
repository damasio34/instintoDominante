import { TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxEchartsModule } from 'ngx-echarts';
import { MaterialModule } from './shared/modules/material.module';
import { QuestionarioComponent } from './components/questionario/questionario.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, ReactiveFormsModule, NgxEchartsModule ],
      declarations: [ AppComponent, QuestionarioComponent ],
    }).compileComponents();
  }));

  it('Deve criar o componente app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Deve conter o título 'Teste instinto dominante'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Teste instinto dominante');
  });

  it('Deve renderizar o questionário', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-questionario').textContent).toBeTruthy();
  });
});

import { Classificacao } from './../../models/classificacao';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';
import { InstintoService } from './../../services/instinto.service';
import { Pergunta } from '../../models/pergunta';
import { Perfil } from '../../models/perfil';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.scss']
})
export class QuestionarioComponent implements OnInit {

  questionario: FormGroup;
  perguntas: Array<Pergunta>;
  resultado: string;
  descricao: string;
  options: any;

  constructor(
    private formBuilder: FormBuilder,
    private instintoService: InstintoService,
    private snackBar: MatSnackBar
  ) {
    this.questionario = this.formBuilder.group({
      perguntas: this.formBuilder.array([]),
    });
  }

  ngOnInit() {
    this.perguntas = [
      new Pergunta('Organização', Perfil.Autopreservacao),
      new Pergunta('Preocupação com imagem', Perfil.Social),
      new Pergunta('Regularidade', Perfil.Autopreservacao),
      new Pergunta('Irracionalidade', Perfil.Sexual),
      new Pergunta('Precaução', Perfil.Autopreservacao),
      new Pergunta('Possessivo', Perfil.Sexual),
      new Pergunta('Mais atenção a si que aos outros', Perfil.Sexual),
      new Pergunta('Idealista', Perfil.Social),
      new Pergunta('Proximidade de pessoas importantes', Perfil.Social),
      new Pergunta('Dificuldade em confiar', Perfil.Autopreservacao),
      new Pergunta('Busca aprovação e reconhecimento', Perfil.Social),
      new Pergunta('Pontualidade', Perfil.Autopreservacao),
      new Pergunta('Agressividade', Perfil.Sexual),
      new Pergunta('Posição de destaque', Perfil.Social),
      new Pergunta('Cuidados com saúde', Perfil.Autopreservacao),
      new Pergunta('Alta energia', Perfil.Sexual),
      new Pergunta('Busca de poder', Perfil.Social),
      new Pergunta('Mais introvertido', Perfil.Autopreservacao),
      new Pergunta('Sensualidade', Perfil.Sexual),
      new Pergunta('Valorização de status', Perfil.Social),
      new Pergunta('Intensidade', Perfil.Sexual),
      new Pergunta('Busca de comprovação (segurança)', Perfil.Sexual),
      new Pergunta('Impulsividade', Perfil.Autopreservacao),
      new Pergunta('União do grupo', Perfil.Social),
      new Pergunta('Competitividade', Perfil.Sexual),
      new Pergunta('Ansiedade', Perfil.Autopreservacao),
      new Pergunta('Manipulador', Perfil.Social),
      new Pergunta('Sedutor', Perfil.Sexual),
      new Pergunta('Maior intolerância à conflitos', Perfil.Sexual),
      new Pergunta('Intrometido', Perfil.Social)
    ];

    const perguntas = this.questionario.controls.perguntas as FormArray;
    this.perguntas.forEach(pergunta => {
      const control = this.formBuilder.control(pergunta);
      perguntas.push(control);
    });
  }

  rangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!control.value.resposta.pontuacao) {
      return { range: true };
    }
    return null;
  }

  isDisabled(i: number): boolean {
    if (i === 0) { return false; }
    const perguntas = this.questionario.controls.perguntas;
    const naoTemPontuacao = perguntas.value[i].resposta.pontuacao === undefined;
    const anteriorEhIndefinido = perguntas.value[i - 1].resposta.pontuacao  === undefined;
    const naoChegouAoFinal = i + 1 < perguntas.value.length;
    const posteriorEhDefinido = naoChegouAoFinal ? perguntas.value[i + 1].resposta.pontuacao !== undefined : true;

    return (naoTemPontuacao && anteriorEhIndefinido) || (naoTemPontuacao && posteriorEhDefinido);
  }

  reset() {
    this.questionario.reset();
    const perguntas = this.questionario.controls.perguntas as FormArray;
    this.perguntas.forEach((pergunta, index) => {
      const control = this.formBuilder.control(pergunta, Validators.required);
      perguntas.controls[index] = control;
    });
    this.resultado = '';
  }

  submit() {
    if (this.questionario.invalid) {
      this.snackBar.open('Questionário incompleto.');
      return;
    }
    this.questionario.value.perguntas.forEach((element: Pergunta) => {
      element.resposta.pontuacao = Math.floor(Math.random() * 11);
    });
    const classificacao = this.instintoService.getClassificacao();
    const classificacaoFinal = this.instintoService.processarClassificacao(classificacao, this.questionario.value.perguntas);
    const resultado = this.instintoService.definirPerfil(classificacaoFinal);
    this.resultado = Perfil[resultado];
    this.descricao = this.instintoService.oberDescricaoDoPerfil(resultado);
    this.montarGrafico(classificacaoFinal);
  }


  private montarGrafico(classificacaoFinal: Classificacao[]) {
    this.options = {
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)',
        show: true
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
        // left: 'left',
        data: ['Autoconhecimento', 'Social', 'Sexual']
      },
      series: [
        {
          type: 'pie',
          radius: '80%',
          bottom: 0,
          top: 'top',
          // avoidLabelOverlap: false,
          label: {
            normal: {
              formatter: '{c}%',
              position: 'inside',
              fontSize: 16
            }
          },
          data: [
            { value: classificacaoFinal[0].pontuacao, name: 'Autoconhecimento' },
            { value: classificacaoFinal[1].pontuacao, name: 'Social' },
            { value: classificacaoFinal[2].pontuacao, name: 'Sexual' }
          ]
        }
      ]
    };
  }
}

import { InstintoService } from './../../services/instinto.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Pergunta } from '../../models/pergunta';
import { Perfil } from 'src/app/models/perfil';

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

  constructor(private formBuilder: FormBuilder, private instintoService: InstintoService) {
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
      const control = this.formBuilder.control(pergunta, Validators.required);
      perguntas.push(control);
    });
  }

  onSubmit() {
    const resultado = this.instintoService.definirPerfil(this.questionario.value.perguntas);
    this.resultado = Perfil[resultado];
    this.descricao = this.instintoService.oberDescricaoDoPerfil(resultado);
  }

}

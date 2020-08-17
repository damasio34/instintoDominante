import { TestBed } from '@angular/core/testing';

import { InstintoService } from './instinto.service';
import { Perfil } from '../models/perfil';
import { Pergunta } from '../models/pergunta';

describe('Valida serviço de definição de perfil', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const organizacao = new Pergunta('organizacao', Perfil.Autopreservacao);
  const preocupaçãoComImagem = new Pergunta('preocupaçãoComImagem', Perfil.Social);
  const regularidade = new Pergunta('regularidade', Perfil.Autopreservacao);
  const irracionalidade = new Pergunta('irracionalidade', Perfil.Sexual);
  const precaucao = new Pergunta('precaucao', Perfil.Autopreservacao);
  const possessivo = new Pergunta('possessivo', Perfil.Sexual);
  const maisatencaoASi = new Pergunta('maisatencaoASi', Perfil.Sexual);
  const idealista = new Pergunta('idealista', Perfil.Social);
  const proximidadeDePessoasImportantes = new Pergunta('proximidadeDePessoasImportantes', Perfil.Social);
  const dificuldadeEmConfiar = new Pergunta('dificuldadeEmConfiar', Perfil.Autopreservacao);

  it('Obtem ranking de perfis', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    expect(service.getRanking().length).toEqual(3);
  });

  it('obter ranking do perfil Altopreservação', () => {
    const instintoService: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      organizacao.aplicarPontuacaoAResposta(1),
      regularidade.aplicarPontuacaoAResposta(1),
      preocupaçãoComImagem.aplicarPontuacaoAResposta(1),
      irracionalidade.aplicarPontuacaoAResposta(1)
    );

    const ranking = instintoService.processarRanking(perguntas);
    expect(instintoService.definirPerfil(ranking)).toEqual(Perfil.Autopreservacao);
  });

  // it('Perfil Altopreservação', () => {
  //   const service: InstintoService = TestBed.get(InstintoService);
  //   const perguntas = new Array<Pergunta>(
  //     organizacao.aplicarPontuacaoAResposta(2),
  //     regularidade.aplicarPontuacaoAResposta(3),
  //     preocupaçãoComImagem.aplicarPontuacaoAResposta(3),
  //     irracionalidade.aplicarPontuacaoAResposta(3)
  //   );
  //   expect(service.definirPerfil(perguntas)).toEqual(Perfil.Autopreservacao);
  // });

  // it('Perfil Social', () => {
  //   const service: InstintoService = TestBed.get(InstintoService);
  //   const perguntas = new Array<Pergunta>(
  //     organizacao,
  //     preocupaçãoComImagem,
  //     idealista,
  //     irracionalidade
  //   );
  //   expect(service.definirPerfil(perguntas)).toEqual(Perfil.Social);
  // });

  // it('Perfil Sexual', () => {
  //   const service: InstintoService = TestBed.get(InstintoService);
  //   const perguntas = new Array<Pergunta>(
  //     dificuldadeEmConfiar,
  //     proximidadeDePessoasImportantes,
  //     possessivo,
  //     maisatencaoASi
  //   );
  //   expect(service.definirPerfil(perguntas)).toEqual(Perfil.Sexual);
  // });
});

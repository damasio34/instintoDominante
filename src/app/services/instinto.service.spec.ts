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

  it('Obtem ranking de perfil', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    expect(service.getRanking().length).toEqual(3);
  });

  it('Perfil Altopreservação', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      organizacao,
      regularidade,
      preocupaçãoComImagem,
      irracionalidade
    );
    expect(service.definirPerfil(perguntas)).toEqual(Perfil.Autopreservacao);
  });

  it('Perfil Social', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      organizacao,
      preocupaçãoComImagem,
      idealista,
      irracionalidade
    );
    expect(service.definirPerfil(perguntas)).toEqual(Perfil.Social);
  });

  it('Perfil Sexual', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      dificuldadeEmConfiar,
      proximidadeDePessoasImportantes,
      possessivo,
      maisatencaoASi
    );
    expect(service.definirPerfil(perguntas)).toEqual(Perfil.Sexual);
  });
});

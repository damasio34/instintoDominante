import { TestBed } from '@angular/core/testing';

import { InstintoService } from './instinto.service';
import { Resposta } from '../models/resposta';
import { Perfil } from '../models/perfil';

describe('Valida serviço de definição de perfil', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const organizacao = new Resposta(Perfil.Autopreservacao);
  const preocupaçãoComImagem = new Resposta(Perfil.Social);
  const regularidade = new Resposta(Perfil.Autopreservacao);
  const irracionalidade = new Resposta(Perfil.Sexual);
  const precaucao = new Resposta(Perfil.Autopreservacao);
  const possessivo = new Resposta(Perfil.Sexual);
  const maisatencaoASi = new Resposta(Perfil.Sexual);
  const idealista = new Resposta(Perfil.Social);
  const proximidadeDePessoasImportantes = new Resposta(Perfil.Social);
  const dificuldadeEmConfiar = new Resposta(Perfil.Autopreservacao);

  it('Obtem ranking de perfil', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    expect(service.getRanking().length).toEqual(3);
  });

  it('Perfil Altopreservação', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const respostas = new Array<Resposta>(
      organizacao,
      regularidade,
      preocupaçãoComImagem,
      irracionalidade
    );
    expect(service.definirPerfil(respostas)).toEqual(Perfil.Autopreservacao);
  });

  it('Perfil Social', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const respostas = new Array<Resposta>(
      organizacao,
      preocupaçãoComImagem,
      idealista,
      irracionalidade
    );
    expect(service.definirPerfil(respostas)).toEqual(Perfil.Social);
  });

  it('Perfil Sexual', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const respostas = new Array<Resposta>(
      dificuldadeEmConfiar,
      proximidadeDePessoasImportantes,
      possessivo,
      maisatencaoASi
    );
    expect(service.definirPerfil(respostas)).toEqual(Perfil.Sexual);
  });
});

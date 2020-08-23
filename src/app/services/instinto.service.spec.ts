import { Classificacao } from './../models/classificacao';
import { TestBed } from '@angular/core/testing';

import { InstintoService } from './instinto.service';
import { Perfil } from '../models/perfil';
import { Pergunta } from '../models/pergunta';

describe('instintoService > Valida serviço de definição de perfil.', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  const autopreservacao = `Comportamentos típicos de quem é Autopreservação Dominante: organizado, pontual, regular, precavido,
  avesso ao risco, cético, cuidados com a saúde, atenção mais para si que para o outro, assuntos e controles financeiros,
  introvertido, dificuldade em confiar, ansioso. Tendência de cuidar mais de si, da saúde, do  sono.
  Dificuldades que ouvimos de pessoas que possuem Autopreservação Dominante: confiar nos outros,
  desapegar de bens materiais, é visto como uma pessoa mais egoista,
  sensação de não ter vivido a vida completamente (não ter feito coisas que gostaria de fazer),
  seu silêncio não é bem compreendido.`;

  const sexual = `Comportamentos típicos de quem é Sexual Dominante: intensidade, irracionalidade, falta de lógica,
  impulsividade, agressividade, competitividade, alta energia, impactante, intrometido, sedutor,  possessivo,
  persuasivo, sensual / erotismo, ciúmes, mais atenção para uns. Vínculo para amizades mais profundas e
  relacionamentos afetivos. Foco no prazer. Dificuldades que ouvimos de pessoas que possuem Sexual Dominante:
  são manipulados para comprar brigas de outras pessoas, se magoam pelos outros por coisas que não são realmente problema,
  são vistos como pessoas agressivas e briguentas, executam tanto que podem chegar a adoecer.`;

  const social = `Comportamentos típicos de quem é Social Dominante: aprovação e reconhecimento, preocupação com imagem,
  união do grupo, posições de destaque, proximidade com pessoas importantes, valorização do status, política,
  manipulação, cultivo de ideias grandes, atenção ao grupo e não ao indivíduo, maior tolerância aos conflitos.
  Tem foco no pertencer e no contribuir. Dificuldades que ouvimos de pessoas que possuem Social Dominante:
  confiam demais nos outros, não sabem falar não, sobrecarga de trabalho,
  querem tanto agradar que podem se sentir "falsos", dificuldade em pedir ajuda,
  se sentem insconscientemente superiores.`;

  let organizacao: Pergunta;
  let preocupaçãoComImagem: Pergunta;
  let regularidade: Pergunta;
  let irracionalidade: Pergunta;
  let precaucao: Pergunta;
  let possessivo: Pergunta;
  let maisatencaoASi: Pergunta;
  let idealista: Pergunta;
  let proximidadeDePessoasImportantes: Pergunta;
  let dificuldadeEmConfiar: Pergunta;

  let buscaAprovação: Pergunta;
  let pontualidade: Pergunta;
  let agressividade: Pergunta;
  let posicaoDeDestaque: Pergunta;
  let cuidadosComSaude: Pergunta;
  let altaEnergia: Pergunta;
  let buscaDePoder: Pergunta;
  let maisIntrovertido: Pergunta;
  let sensualidade: Pergunta;
  let valorizacaoDeStatus: Pergunta;

  let intensidade: Pergunta;
  let buscaDeComprovacao: Pergunta;
  let impulsividade: Pergunta;
  let uniaoDogrupo: Pergunta;
  let competitividade: Pergunta;
  let ansiedade: Pergunta;
  let manipulador: Pergunta;
  let sedutor: Pergunta;
  let maiorIntolerancia: Pergunta;
  let intrometido: Pergunta;

  function obterClassificacaoMock(): Array<Classificacao> {
    return new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao),
      new Classificacao(Perfil.Social),
      new Classificacao(Perfil.Sexual)
    );
  }

  function setupQuestionario() {
    organizacao = new Pergunta('Organização', Perfil.Autopreservacao);
    preocupaçãoComImagem = new Pergunta('preocupaçãoComImagem', Perfil.Social);
    regularidade = new Pergunta('regularidade', Perfil.Autopreservacao);
    irracionalidade = new Pergunta('irracionalidade', Perfil.Sexual);
    precaucao = new Pergunta('precaucao', Perfil.Autopreservacao);
    possessivo = new Pergunta('possessivo', Perfil.Sexual);
    maisatencaoASi = new Pergunta('maisatencaoASi', Perfil.Autopreservacao);
    idealista = new Pergunta('idealista', Perfil.Social);
    proximidadeDePessoasImportantes = new Pergunta('proximidadeDePessoasImportantes', Perfil.Social);
    dificuldadeEmConfiar = new Pergunta('dificuldadeEmConfiar', Perfil.Autopreservacao);

    buscaAprovação = new Pergunta('Busca aprovação', Perfil.Social);
    pontualidade = new Pergunta('pontualidade', Perfil.Autopreservacao);
    agressividade = new Pergunta('Agressividade', Perfil.Sexual);
    posicaoDeDestaque = new Pergunta('Posição de destaque', Perfil.Social);
    cuidadosComSaude = new Pergunta('Cuidados com saúde', Perfil.Autopreservacao);
    altaEnergia = new Pergunta('Alta energia', Perfil.Sexual);
    buscaDePoder = new Pergunta('Busca de poder', Perfil.Social);
    maisIntrovertido = new Pergunta('Mais introvertido', Perfil.Autopreservacao);
    sensualidade = new Pergunta('Sensualidade', Perfil.Sexual);
    valorizacaoDeStatus = new Pergunta('Valorização de status', Perfil.Social);

    intensidade = new Pergunta('Intensidade', Perfil.Sexual);
    buscaDeComprovacao = new Pergunta('Busca de comprovação', Perfil.Autopreservacao);
    impulsividade = new Pergunta('Impulsividade', Perfil.Sexual);
    uniaoDogrupo = new Pergunta('União do grupo', Perfil.Social);
    competitividade = new Pergunta('Competitividade', Perfil.Sexual);
    ansiedade = new Pergunta('Ansiedade', Perfil.Autopreservacao);
    manipulador = new Pergunta('manipulador', Perfil.Social);
    sedutor = new Pergunta('sedutor', Perfil.Sexual);
    maiorIntolerancia = new Pergunta('Maior intolerância', Perfil.Social);
    intrometido = new Pergunta('Maior intolerância', Perfil.Sexual);
  }

  it('obterClassificacao > Obtem classificação com pontuação indefinida.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const classificacao: Array<Classificacao> = service.obterClassificacao();

    expect(classificacao[0].pontuacao).toEqual(undefined);
    expect(classificacao[1].pontuacao).toEqual(undefined);
    expect(classificacao[2].pontuacao).toEqual(undefined);
  });

  it('obterClassificacao > Obtem classificação com os perfis predefinidos.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const classificacao: Array<Classificacao> = service.obterClassificacao();

    expect(classificacao.length).toEqual(3);
    expect(classificacao[0].perfil).toEqual(Perfil.Autopreservacao);
    expect(classificacao[1].perfil).toEqual(Perfil.Social);
    expect(classificacao[2].perfil).toEqual(Perfil.Sexual);
  });

  it('oberDescricaoDoPerfil > Descrição do perfil autopreservação está correta.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const descricao: string = service.oberDescricaoDoPerfil(Perfil.Autopreservacao);

    expect(descricao).toEqual(autopreservacao);
  });

  it('oberDescricaoDoPerfil > Descrição do perfil social está correta.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const descricao: string = service.oberDescricaoDoPerfil(Perfil.Social);

    expect(descricao).toEqual(social);
  });

  it('oberDescricaoDoPerfil > Descrição do perfil sexual está correta.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const descricao: string = service.oberDescricaoDoPerfil(Perfil.Sexual);

    expect(descricao).toEqual(sexual);
  });

  it('oberDescricaoDoPerfil > Perfil inválido.', () => {
    const service: InstintoService = TestBed.get(InstintoService);

    expect(() => service.oberDescricaoDoPerfil(null)).toThrow(new Error('Perfil inválido'));
  });

  it('processarClassificacao > obter classificação do perfil Autopreservação.', () => {
    setupQuestionario();
    const instintoService: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      organizacao.aplicarPontuacaoAResposta(4),
      preocupaçãoComImagem.aplicarPontuacaoAResposta(3),
      regularidade.aplicarPontuacaoAResposta(5),
      irracionalidade.aplicarPontuacaoAResposta(5),
      precaucao.aplicarPontuacaoAResposta(7),
      possessivo.aplicarPontuacaoAResposta(4),
      maisatencaoASi.aplicarPontuacaoAResposta(7),
      idealista.aplicarPontuacaoAResposta(4),
      proximidadeDePessoasImportantes.aplicarPontuacaoAResposta(5),
      dificuldadeEmConfiar.aplicarPontuacaoAResposta(4),

      buscaAprovação.aplicarPontuacaoAResposta(4),
      pontualidade.aplicarPontuacaoAResposta(8),
      agressividade.aplicarPontuacaoAResposta(6),
      posicaoDeDestaque.aplicarPontuacaoAResposta(6),
      cuidadosComSaude.aplicarPontuacaoAResposta(6),
      altaEnergia.aplicarPontuacaoAResposta(5),
      buscaDePoder.aplicarPontuacaoAResposta(3),
      maisIntrovertido.aplicarPontuacaoAResposta(7),
      sensualidade.aplicarPontuacaoAResposta(3),
      valorizacaoDeStatus.aplicarPontuacaoAResposta(2),

      intensidade.aplicarPontuacaoAResposta(6),
      buscaDeComprovacao.aplicarPontuacaoAResposta(6),
      impulsividade.aplicarPontuacaoAResposta(4),
      uniaoDogrupo.aplicarPontuacaoAResposta(3),
      competitividade.aplicarPontuacaoAResposta(4),
      ansiedade.aplicarPontuacaoAResposta(8),
      manipulador.aplicarPontuacaoAResposta(3),
      sedutor.aplicarPontuacaoAResposta(2),
      maiorIntolerancia.aplicarPontuacaoAResposta(3),
      intrometido.aplicarPontuacaoAResposta(4),
    );
    const classificacaoMock: Array<Classificacao> = obterClassificacaoMock();
    const classificacao = instintoService.processarClassificacao(classificacaoMock, perguntas);
    const classificacaoEsperada = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(62),
      new Classificacao(Perfil.Social).SetPontuacao(36),
      new Classificacao(Perfil.Sexual).SetPontuacao(43)
    );

    expect(classificacao).toEqual(classificacaoEsperada);
  });

  it('processarClassificacao > obter classificação do perfil Social.', () => {
    setupQuestionario();
    const instintoService: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      organizacao.aplicarPontuacaoAResposta(4),
      preocupaçãoComImagem.aplicarPontuacaoAResposta(8),
      regularidade.aplicarPontuacaoAResposta(5),
      irracionalidade.aplicarPontuacaoAResposta(5),
      precaucao.aplicarPontuacaoAResposta(7),
      possessivo.aplicarPontuacaoAResposta(4),
      maisatencaoASi.aplicarPontuacaoAResposta(7),
      idealista.aplicarPontuacaoAResposta(9),
      proximidadeDePessoasImportantes.aplicarPontuacaoAResposta(7),
      dificuldadeEmConfiar.aplicarPontuacaoAResposta(4),

      buscaAprovação.aplicarPontuacaoAResposta(9),
      pontualidade.aplicarPontuacaoAResposta(5),
      agressividade.aplicarPontuacaoAResposta(6),
      posicaoDeDestaque.aplicarPontuacaoAResposta(8),
      cuidadosComSaude.aplicarPontuacaoAResposta(6),
      altaEnergia.aplicarPontuacaoAResposta(5),
      buscaDePoder.aplicarPontuacaoAResposta(3),
      maisIntrovertido.aplicarPontuacaoAResposta(3),
      sensualidade.aplicarPontuacaoAResposta(3),
      valorizacaoDeStatus.aplicarPontuacaoAResposta(9),

      intensidade.aplicarPontuacaoAResposta(6),
      buscaDeComprovacao.aplicarPontuacaoAResposta(6),
      impulsividade.aplicarPontuacaoAResposta(4),
      uniaoDogrupo.aplicarPontuacaoAResposta(3),
      competitividade.aplicarPontuacaoAResposta(4),
      ansiedade.aplicarPontuacaoAResposta(4),
      manipulador.aplicarPontuacaoAResposta(3),
      sedutor.aplicarPontuacaoAResposta(2),
      maiorIntolerancia.aplicarPontuacaoAResposta(3),
      intrometido.aplicarPontuacaoAResposta(4),
    );

    const classificacaoMock: Array<Classificacao> = obterClassificacaoMock();
    const classificacao = instintoService.processarClassificacao(classificacaoMock, perguntas);
    const classificacaoEsperada = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(51),
      new Classificacao(Perfil.Social).SetPontuacao(62),
      new Classificacao(Perfil.Sexual).SetPontuacao(43)
    );

    expect(classificacao).toEqual(classificacaoEsperada);
  });

  it('processarClassificacao > obter classificação do perfil Sexual.', () => {
    setupQuestionario();
    const instintoService: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      organizacao.aplicarPontuacaoAResposta(3),
      preocupaçãoComImagem.aplicarPontuacaoAResposta(3),
      regularidade.aplicarPontuacaoAResposta(5),
      irracionalidade.aplicarPontuacaoAResposta(9),
      precaucao.aplicarPontuacaoAResposta(4),
      possessivo.aplicarPontuacaoAResposta(9),
      maisatencaoASi.aplicarPontuacaoAResposta(7),
      idealista.aplicarPontuacaoAResposta(4),
      proximidadeDePessoasImportantes.aplicarPontuacaoAResposta(5),
      dificuldadeEmConfiar.aplicarPontuacaoAResposta(3),

      buscaAprovação.aplicarPontuacaoAResposta(4),
      pontualidade.aplicarPontuacaoAResposta(8),
      agressividade.aplicarPontuacaoAResposta(9),
      posicaoDeDestaque.aplicarPontuacaoAResposta(6),
      cuidadosComSaude.aplicarPontuacaoAResposta(6),
      altaEnergia.aplicarPontuacaoAResposta(8),
      buscaDePoder.aplicarPontuacaoAResposta(3),
      maisIntrovertido.aplicarPontuacaoAResposta(7),
      sensualidade.aplicarPontuacaoAResposta(8),
      valorizacaoDeStatus.aplicarPontuacaoAResposta(7),

      intensidade.aplicarPontuacaoAResposta(6),
      buscaDeComprovacao.aplicarPontuacaoAResposta(6),
      impulsividade.aplicarPontuacaoAResposta(4),
      uniaoDogrupo.aplicarPontuacaoAResposta(3),
      competitividade.aplicarPontuacaoAResposta(4),
      ansiedade.aplicarPontuacaoAResposta(8),
      manipulador.aplicarPontuacaoAResposta(9),
      sedutor.aplicarPontuacaoAResposta(9),
      maiorIntolerancia.aplicarPontuacaoAResposta(7),
      intrometido.aplicarPontuacaoAResposta(7),
    );

    const classificacaoMock: Array<Classificacao> = obterClassificacaoMock();
    const classificacao = instintoService.processarClassificacao(classificacaoMock, perguntas);
    const classificacaoEsperada = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(57),
      new Classificacao(Perfil.Social).SetPontuacao(51),
      new Classificacao(Perfil.Sexual).SetPontuacao(73)
    );

    expect(classificacao).toEqual(classificacaoEsperada);
  });

  it('processarClassificacao > obter classificação em caso de empate.', () => {
    setupQuestionario();
    const instintoService: InstintoService = TestBed.get(InstintoService);
    const perguntas = new Array<Pergunta>(
      organizacao.aplicarPontuacaoAResposta(9),
      preocupaçãoComImagem.aplicarPontuacaoAResposta(3),
      regularidade.aplicarPontuacaoAResposta(6),
      irracionalidade.aplicarPontuacaoAResposta(5),
      precaucao.aplicarPontuacaoAResposta(7),
      possessivo.aplicarPontuacaoAResposta(8),
      maisatencaoASi.aplicarPontuacaoAResposta(2),
      idealista.aplicarPontuacaoAResposta(2),
      proximidadeDePessoasImportantes.aplicarPontuacaoAResposta(8),
      dificuldadeEmConfiar.aplicarPontuacaoAResposta(4),

      buscaAprovação.aplicarPontuacaoAResposta(1),
      pontualidade.aplicarPontuacaoAResposta(4),
      agressividade.aplicarPontuacaoAResposta(6),
      posicaoDeDestaque.aplicarPontuacaoAResposta(3),
      cuidadosComSaude.aplicarPontuacaoAResposta(1),
      altaEnergia.aplicarPontuacaoAResposta(5),
      buscaDePoder.aplicarPontuacaoAResposta(3),
      maisIntrovertido.aplicarPontuacaoAResposta(0),
      sensualidade.aplicarPontuacaoAResposta(3),
      valorizacaoDeStatus.aplicarPontuacaoAResposta(2),

      intensidade.aplicarPontuacaoAResposta(6),
      buscaDeComprovacao.aplicarPontuacaoAResposta(6),
      impulsividade.aplicarPontuacaoAResposta(4),
      uniaoDogrupo.aplicarPontuacaoAResposta(3),
      competitividade.aplicarPontuacaoAResposta(4),
      ansiedade.aplicarPontuacaoAResposta(8),
      manipulador.aplicarPontuacaoAResposta(2),
      sedutor.aplicarPontuacaoAResposta(2),
      maiorIntolerancia.aplicarPontuacaoAResposta(9),
      intrometido.aplicarPontuacaoAResposta(4),
    );

    const classificacaoMock: Array<Classificacao> = obterClassificacaoMock();
    const classificacao = instintoService.processarClassificacao(classificacaoMock, perguntas);
    const classificacaoEsperada = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(47),
      new Classificacao(Perfil.Social).SetPontuacao(36),
      new Classificacao(Perfil.Sexual).SetPontuacao(47)
    );

    expect(classificacao).toEqual(classificacaoEsperada);
  });

  it('definirPerfil > Perfil Autopreservação.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const classificacao = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(62),
      new Classificacao(Perfil.Social).SetPontuacao(36),
      new Classificacao(Perfil.Sexual).SetPontuacao(43)
    );
    expect(service.definirPerfil(classificacao)).toEqual(Perfil.Autopreservacao);
  });

  it('definirPerfil > Perfil Social.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const classificacao = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(51),
      new Classificacao(Perfil.Social).SetPontuacao(62),
      new Classificacao(Perfil.Sexual).SetPontuacao(43)
    );
    expect(service.definirPerfil(classificacao)).toEqual(Perfil.Social);
  });

  it('definirPerfil > Perfil Sexual.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const classificacao = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(57),
      new Classificacao(Perfil.Social).SetPontuacao(51),
      new Classificacao(Perfil.Sexual).SetPontuacao(73)
    );
    expect(service.definirPerfil(classificacao)).toEqual(Perfil.Sexual);
  });

  it('definirPerfil > Perfil não diferente do esperado.', () => {
    const service: InstintoService = TestBed.get(InstintoService);
    const classificacao = new Array<Classificacao>(
      new Classificacao(Perfil.Autopreservacao).SetPontuacao(57),
      new Classificacao(Perfil.Social).SetPontuacao(51),
      new Classificacao(Perfil.Sexual).SetPontuacao(73)
    );
    expect(service.definirPerfil(classificacao)).not.toEqual(Perfil.Autopreservacao);
    expect(service.definirPerfil(classificacao)).not.toEqual(Perfil.Social);
  });
});

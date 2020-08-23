import { Classificacao } from './../models/classificacao';
import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { Pergunta } from '../models/pergunta';

@Injectable({
  providedIn: 'root'
})
export class InstintoService {

  autopreservacao = `Comportamentos típicos de quem é Autopreservação Dominante: organizado, pontual, regular, precavido,
  avesso ao risco, cético, cuidados com a saúde, atenção mais para si que para o outro, assuntos e controles financeiros,
  introvertido, dificuldade em confiar, ansioso. Tendência de cuidar mais de si, da saúde, do  sono.
  Dificuldades que ouvimos de pessoas que possuem Autopreservação Dominante: confiar nos outros,
  desapegar de bens materiais, é visto como uma pessoa mais egoista,
  sensação de não ter vivido a vida completamente (não ter feito coisas que gostaria de fazer),
  seu silêncio não é bem compreendido.`;

  sexual = `Comportamentos típicos de quem é Sexual Dominante: intensidade, irracionalidade, falta de lógica,
  impulsividade, agressividade, competitividade, alta energia, impactante, intrometido, sedutor,  possessivo,
  persuasivo, sensual / erotismo, ciúmes, mais atenção para uns. Vínculo para amizades mais profundas e
  relacionamentos afetivos. Foco no prazer. Dificuldades que ouvimos de pessoas que possuem Sexual Dominante:
  são manipulados para comprar brigas de outras pessoas, se magoam pelos outros por coisas que não são realmente problema,
  são vistos como pessoas agressivas e briguentas, executam tanto que podem chegar a adoecer.`;

  social = `Comportamentos típicos de quem é Social Dominante: aprovação e reconhecimento, preocupação com imagem,
  união do grupo, posições de destaque, proximidade com pessoas importantes, valorização do status, política,
  manipulação, cultivo de ideias grandes, atenção ao grupo e não ao indivíduo, maior tolerância aos conflitos.
  Tem foco no pertencer e no contribuir. Dificuldades que ouvimos de pessoas que possuem Social Dominante:
  confiam demais nos outros, não sabem falar não, sobrecarga de trabalho,
  querem tanto agradar que podem se sentir "falsos", dificuldade em pedir ajuda,
  se sentem insconscientemente superiores.`;

  private incrementarPontuacao(
    pontuacaoAtual: number,
    pergunta: Pergunta): number {
    return isNaN(pontuacaoAtual) ? pergunta.resposta.pontuacao : pontuacaoAtual + pergunta.resposta.pontuacao;
  }

  private obterPerfilMaisPontuado(): (
    previousValue: Classificacao,
    currentValue: Classificacao,
    currentIndex: number,
    array: Classificacao[]) => Classificacao {
    return (prev: Classificacao, current: Classificacao) => {
      return (prev.pontuacao > current.pontuacao) ? prev : current;
    };
  }

  definirPerfil(classificacao: Classificacao[]): Perfil {
    const perfilMaisPontuado = classificacao.reduce(this.obterPerfilMaisPontuado());
    return perfilMaisPontuado.perfil;
  }

  obterClassificacao(): Array<Classificacao> {
    const classificacao = new Array<Classificacao>();

    for (const item in Perfil) {
      if (isNaN(Number(item))) {
        const itemPerfil = item as keyof typeof Perfil;
        const perfil: Perfil = Perfil[itemPerfil];
        classificacao.push(new Classificacao(perfil));
      }
    }

    return classificacao;
  }

  oberDescricaoDoPerfil(perfil: Perfil): string {
    switch (perfil) {
      case Perfil.Autopreservacao: return this.autopreservacao;
      case Perfil.Sexual: return this.sexual;
      case Perfil.Social: return this.social;
      default: throw new Error('Perfil inválido');
    }
  }

  processarClassificacao(classificacao: Array<Classificacao>, perguntas: Pergunta[]): Classificacao[] {
    perguntas.forEach((pergunta: Pergunta) => {
      const classificacaoAtual = classificacao.find(item => item.perfil === pergunta.perfil);
      classificacaoAtual.pontuacao = this.incrementarPontuacao(classificacaoAtual.pontuacao, pergunta);
    });
    return classificacao;
  }

}

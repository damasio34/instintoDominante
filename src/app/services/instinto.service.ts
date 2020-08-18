import { Classificacao } from './../models/classificacao';
import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { Pergunta } from '../models/pergunta';

@Injectable({
  providedIn: 'root'
})
export class InstintoService {
  oberDescricaoDoPerfil(perfil: Perfil): string {
    switch (+perfil) {
      case +Perfil.Autopreservacao:
        return `Comportamentos típicos de quem é Autopreservação Dominante: organizado, pontual, regular, precavido,
          avesso ao risco, cético, cuidados com a saúde, atenção mais para si que para o outro, assuntos e controles financeiros,
          introvertido, dificuldade em confiar, ansioso. Tendência de cuidar mais de si, da saúde, do  sono.
          Dificuldades que ouvimos de pessoas que possuem Autopreservação Dominante: confiar nos outros,
          desapegar de bens materiais, é visto como uma pessoa mais egoista,
          sensação de não ter vivido a vida completamente (não ter feito coisas que gostaria de fazer),
          seu silêncio não é bem compreendido.`;
      case +Perfil.Sexual:
        return `Comportamentos típicos de quem é Sexual Dominante: intensidade, irracionalidade, falta de lógica,
          impulsividade, agressividade, competitividade, alta energia, impactante, intrometido, sedutor,  possessivo,
          persuasivo, sensual / erotismo, ciúmes, mais atenção para uns. Vínculo para amizades mais profundas e
          relacionamentos afetivos. Foco no prazer. Dificuldades que ouvimos de pessoas que possuem Sexual Dominante:
          são manipulados para comprar brigas de outras pessoas, se magoam pelos outros por coisas que não são realmente problema,
          são vistos como pessoas agressivas e briguentas, executam tanto que podem chegar a adoecer.`;
      case +Perfil.Social:
        return `Comportamentos típicos de quem é Social Dominante: aprovação e reconhecimento, preocupação com imagem,
          união do grupo, posições de destaque, proximidade com pessoas importantes, valorização do status, política,
          manipulação, cultivo de ideias grandes, atenção ao grupo e não ao indivíduo, maior tolerância aos conflitos.
          Tem foco no pertencer e no contribuir. Dificuldades que ouvimos de pessoas que possuem Social Dominante:
          confiam demais nos outros, não sabem falar não, sobrecarga de trabalho,
          querem tanto agradar que podem se sentir "falsos", dificuldade em pedir ajuda,
          se sentem insconscientemente superiores.`;
    }
  }

  definirPerfil(classificacao: Classificacao[]): Perfil {
    const perfilMaisPontuado = classificacao.reduce(this.obterPerfilMaisPontuado());
    return perfilMaisPontuado.perfil;
  }

  processarClassificacao(classificacao: Array<Classificacao>, perguntas: Pergunta[]): Classificacao[] {
    perguntas.forEach((pergunta: Pergunta) => {
      const classificacaoAtual = classificacao.find(item => item.perfil === pergunta.perfil);
      classificacaoAtual.pontuacao += pergunta.resposta.pontuacao;
    });
    return classificacao;
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

  getClassificacao(): Array<Classificacao> {
    const ranking = new Array<Classificacao>();

    for (const item in Perfil) {
      if (isNaN(Number(item))) {
        const itemPerfil = item as keyof typeof Perfil;
        const perfil: Perfil = Perfil[itemPerfil];
        ranking.push(new Classificacao(perfil));
      }
    }

    return ranking;
  }
}

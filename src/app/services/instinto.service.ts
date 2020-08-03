import { Classificacao } from './../models/classificacao';
import { Injectable } from '@angular/core';
import { Perfil } from '../models/perfil';
import { Pergunta } from '../models/pergunta';

@Injectable({
  providedIn: 'root'
})
export class InstintoService {
  definirPerfil(perguntas: Pergunta[]): Perfil {
    const ranking = this.getRanking();

    perguntas.forEach((pergunta: Pergunta) => {
      const classificacao = ranking.find(item => item.perfil === pergunta.perfil);
      classificacao.pontuacao += pergunta.resposta.pontuacao;
    });

    const perfilMaisPontuado = ranking.reduce(this.obterPerfilMaisPontuado());

    return perfilMaisPontuado.perfil;
  }
  private obterPerfilMaisPontuado(): (
    previousValue: Classificacao,
    currentValue: Classificacao,
    currentIndex: number,
    array: Classificacao[]) => Classificacao {
    return (prev: Classificacao, current: Classificacao) => {
      console.log(prev);
      console.log(current);

      return (prev.pontuacao > current.pontuacao) ? prev : current;
    };
  }

  getRanking(): Array<Classificacao> {
    const ranking = new Array<Classificacao>();

    for (const item in Perfil) {
      if (isNaN(Number(item))) { ranking.push(new Classificacao(item)); }
    }

    return ranking;
  }

  constructor() { }
}

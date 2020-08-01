import { Classificacao } from './../models/classificacao';
import { Injectable } from '@angular/core';
import { Resposta } from '../models/resposta';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class InstintoService {
  definirPerfil(respostas: Resposta[]): Perfil {
    const ranking = this.getRanking();

    respostas.forEach((resposta: Resposta) => {
      const classificacao = ranking.find(item => item.perfil === resposta.perfil);
      classificacao.pontuacao++;
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

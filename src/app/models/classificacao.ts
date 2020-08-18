import { Perfil } from './perfil';

export class Classificacao {
  perfil: Perfil;
  pontuacao: number;

  constructor(perfil: Perfil) {
    this.perfil = perfil;
    this.pontuacao = 0;
  }

  public SetPontuacao(pontuacao: number): Classificacao {
    this.pontuacao = pontuacao;
    return this;
  }
}

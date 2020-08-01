import { Perfil } from './perfil';

export class Classificacao {
  perfil: Perfil;
  pontuacao: number;

  constructor(perfil: any) {
    this.perfil = (Perfil as any)[perfil];
    this.pontuacao = 0;
  }
}

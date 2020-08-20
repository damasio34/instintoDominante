import { Resposta } from './resposta';
import { Perfil } from './perfil';

export class Pergunta {
  resposta: Resposta;
  titulo: string;
  perfil: Perfil;

  constructor(titulo: string, perfil: Perfil) {
    this.titulo = titulo;
    this.perfil = perfil;
    this.resposta = new Resposta();
  }

  public aplicarPontuacaoAResposta(pontuacao: number): Pergunta {
    this.resposta.pontuacao = pontuacao;
    return this;
  }
}

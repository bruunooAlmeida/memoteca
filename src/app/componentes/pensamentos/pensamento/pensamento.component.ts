import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento(): string {
      return this.pensamento.conteudo.length >= 256? 'pensamento-g':'pensamento-p'
  }

  mudarIconeFavorito(): string{
    return this.pensamento.favorito == false? "inativo": "ativo";
  }

}

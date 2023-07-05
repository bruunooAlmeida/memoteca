import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css'],
})
export class CriarPensamentosComponent implements OnInit {
  private inputConteudo: HTMLInputElement;
  private inputAutor: HTMLInputElement;

  constructor() {
    this.inputAutor = document.querySelector('#autoria');
    this.inputConteudo = document.querySelector('#pensamento');
  }

  ngOnInit(): void {}

  protected criarPensamentos() {
    alert('Salvar');
  }

  protected cancelar() {
    alert("Operação Cancelada");
    this.limparElementos();
  }

  private limparElementos(){
    this.inputAutor.value = "";
    this.inputConteudo.value = '';
    this.pensamentos.autor= "";
  }

  pensamentos = {
    id: 1,
    autor: 'Dev',
    conteudo: 'Aprendendo Angular na Alura',
    modelo: "modelo2"
  };
}

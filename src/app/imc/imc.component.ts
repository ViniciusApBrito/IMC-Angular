import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class IMCComponent {
  altura: number = 0;
  indice: number | undefined;
  peso: number = 0;
  result: string = '';
  sexo: string = '';

  calculo() {
    if (this.altura !== null || this.peso !== null) {
      this.indice = this.peso / (this.altura * this.altura);
      if (this.indice < 18.5) {
        this.result = 'Magreza';
      } else if (this.indice < 25) {
        this.result = 'Saudável';
      } else if (this.indice < 30) {
        this.result = 'Sobrepeso';
      } else if (this.indice < 40) {
        this.result = 'Obesidade';
      } else {
        this.result = 'Obesidade grave';
      }
      if (this.sexo === 'Masculino') {
        this.result = `Homem - ${this.result}`;
      }
      else if (this.sexo === 'Feminino') {
        this.result = `Mulher - ${this.result}`;
      }
    } else {
      this.indice = undefined;
      this.result = 'Algo deu errado.';
    }
  }

  Cores() {
    if (this.result.includes('Magreza')) {
      return 'danger';
    } else if (this.result.includes('Saudável')) {
      return 'success';
    } else if (this.result.includes('Sobrepeso')) {
      return 'warning';
    } else if (this.result.includes('Obesidade')) {
      return 'danger';
    } else if (this.result.includes('Obesidade grave')) {
      return 'danger';
    } else {
      return 'sucess';
    }
  }
}

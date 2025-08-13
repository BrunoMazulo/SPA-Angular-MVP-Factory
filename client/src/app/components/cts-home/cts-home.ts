import { Component } from '@angular/core';
import { CtCard } from "../ct-card/ct-card";

@Component({
  selector: 'app-cts-home',
  imports: [CtCard],
  templateUrl: './cts-home.html',
  styleUrl: './cts-home.css'
})
export class CtsHome {
  cts = [
    { ct: '9376', nome: 'CT 9376 - Prensa ABB', opsDisponiveis: 90, opsPendentes: 45, opsUrgentes: 4, horas: 12, horasMax: 36, dias: 4 },
    { ct: '1238', nome: 'CT 1238 - Dobradeira CN', opsDisponiveis: 190, opsPendentes: 15, opsUrgentes: 36, horas: 19, horasMax: 95, dias: 12 },
    { ct: '9454', nome: 'CT 9454 - Estiradeira Hufford', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '9472', nome: 'CT 9472 - Dobradeira Bystronic', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '9054', nome: 'CT 9054 - Solubilização', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '9354', nome: 'CT 9354 - Ajustagem alumínio', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '1590', nome: 'CT 1590 - Prensa Flow', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '1239', nome: 'CT 1239 - Desempeno Shear Clip', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '9147', nome: 'CT 9147 - Desempeno Rápido', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '9148', nome: 'CT 9148 - Desempeno Complexo', opsDisponiveis: 29, opsPendentes: 5, opsUrgentes: 0, horas: 9, horasMax: 9, dias: 2 },
    { ct: '9657', nome: 'CT 9657 - Breton', opsDisponiveis: 129, opsPendentes: 5, opsUrgentes: 10, horas: 29, horasMax: 139, dias: 2 },
  ];
}

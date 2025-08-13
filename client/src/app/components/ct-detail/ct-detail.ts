import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { KpiTile } from '../kpi-tile/kpi-tile';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CtHours } from '../ct-hours/ct-hours';
import { CtOrder, CtOrdersTable } from '../ct-orders-table/ct-orders-table';
import {faListCheck, faDiagramProject, faBullseye, faClock, faCrosshairs, faFileExcel} from '@fortawesome/free-solid-svg-icons';


type CtSummary = {
  id:number;
  disponiveis:number; pendentes:number; urgentes:number;
  horasDisponiveis:number; agingMax:number;
  hoursCurrent:number; hoursTarget:number;
};

@Component({
  selector: 'app-ct-detail',
  imports: [CommonModule, KpiTile, RouterLink, FontAwesomeModule, CtHours, CtOrdersTable],
  templateUrl: './ct-detail.html',
  styleUrl: './ct-detail.css'
})
export class CtDetail {
  private route = inject(ActivatedRoute);

  // ícones
  faListCheck = faListCheck;
  faDiagramProject = faDiagramProject;
  faBullseye = faBullseye;
  faClock = faClock;
  faCrosshairs = faCrosshairs;
  faFileExcel = faFileExcel;

  data!: CtSummary | null;
  orders: CtOrder[] = [];

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id') ?? 0);

    // MOCK: troque por chamada ao seu service
    this.data = {
      id,
      disponiveis: 85,
      pendentes: 45,
      urgentes: 4,
      horasDisponiveis: 12,
      agingMax: 4,
      hoursCurrent: 230,
      hoursTarget: 300
    };

    this.orders = [
      { seq:1, ordem:'44093782', material:'9791912', pn:'505-06329-002', qtd:24, dataPlanejada:'11/08/2025', horas:0.114, prioridade:'AOG (Z)', aging:2, status:'Done' },
      { seq:2, ordem:'44100525', material:'2758173', pn:'505-06329-001', qtd:6,  dataPlanejada:'11/08/2025', horas:0.029, prioridade:'AOG (Z)', aging:2, status:'Done' },
      { seq:3, ordem:'44096676', material:'3758675', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'MONTAGEM PARADA (S)', aging:4, status:'Pending' },
      { seq:4, ordem:'44096677', material:'8858234', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'LINHAS DE GESTÃO (P)', aging:4, status:'Pending' },
      { seq:5, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:6, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:7, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:8, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:9, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:10, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:11, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:12, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:13, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      { seq:14, ordem:'44096691', material:'9558292', pn:'201-234-03',    qtd:8,  dataPlanejada:'11/08/2025', horas:0.038, prioridade:'', aging:4, status:'Pending' },
      // ...
    ];
  }

    exportCsv() {
    const rows = [
      ['Seq','Ordem','Material','PN','Qtd','Data planejada','Horas','Prioridade','Aging','Status'],
      ...this.orders.map(o => [o.seq,o.ordem,o.material,o.pn,o.qtd,o.dataPlanejada,o.horas,o.prioridade,o.aging,o.status])
    ];
    const csv = rows.map(r => r.join(';')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `ct-${this.data?.id}-orders.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
  }

}

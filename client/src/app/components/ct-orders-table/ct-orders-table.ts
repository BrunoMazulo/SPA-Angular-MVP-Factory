import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export type CtOrder = {
  seq:number; ordem:string; material:string; pn:string; qtd:number;
  dataPlanejada:string; horas:number; prioridade:string; aging:number;
  status:'Done'|'Pending';
};

@Component({
  selector: 'app-ct-orders-table',
  imports: [CommonModule],
  templateUrl: './ct-orders-table.html',
  styleUrl: './ct-orders-table.css'
})
export class CtOrdersTable implements OnChanges{
  public Math = Math;
  @Input() pageSize = 10;  
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['orders']) this.page = 1; // reseta ao receber novos dados
  }

  @Input() orders: CtOrder[] = [];
               // tamanho da página (pode vir do pai)

  page = 1;                               // página atual (1-based)
  pageSizes = [5, 10, 20, 50];

  // fatia os registros a exibir na página atual
  get paged(): CtOrder[] {
    const start = (this.page - 1) * this.pageSize;
    return this.orders.slice(start, start + this.pageSize);
  }

  get total(): number {
    return this.orders.length;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }

  // janela de páginas (máx 5 botões)
  get pages(): number[] {
    const max = 5;
    const total = this.totalPages;
    let start = Math.max(1, this.page - Math.floor(max / 2));
    let end = Math.min(total, start + max - 1);
    start = Math.max(1, end - max + 1);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  goTo(n: number)   { this.page = Math.min(this.totalPages, Math.max(1, n)); }
  next()            { this.goTo(this.page + 1); }
  prev()            { this.goTo(this.page - 1); }
  changePageSize(v: string) {
    const n = parseInt(v, 10) || this.pageSize;
    this.pageSize = n;
    this.page = 1;
  }

   // Mapeia o texto recebido para a tag desejada -> Para classificar qual badge usar na coluna prioridade
  priorityBadge(p?: string) {
    const s = (p ?? '').toLowerCase().trim();
    if (!s) return { text: null as string | null, classes: '' };

    if (s.includes('aog'))   return { text: 'AOG',   classes: 'bg-success' };
    if (s.includes('mont') || s.includes('mp (e)'))
                             return { text: 'MP (E)', classes: 'bg-danger' };
    if (s.includes('linha')) return { text: 'LG (P)', classes: 'bg-warning text-dark' };

    // qualquer outro texto → sem tag (ou personalize aqui)
    return { text: null as string | null, classes: '' };
  }

}

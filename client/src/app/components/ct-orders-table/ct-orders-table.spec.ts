import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtOrdersTable } from './ct-orders-table';

describe('CtOrdersTable', () => {
  let component: CtOrdersTable;
  let fixture: ComponentFixture<CtOrdersTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtOrdersTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtOrdersTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

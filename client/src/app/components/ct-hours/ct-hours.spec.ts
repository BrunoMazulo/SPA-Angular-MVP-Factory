import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtHours } from './ct-hours';

describe('CtHours', () => {
  let component: CtHours;
  let fixture: ComponentFixture<CtHours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtHours]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtHours);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

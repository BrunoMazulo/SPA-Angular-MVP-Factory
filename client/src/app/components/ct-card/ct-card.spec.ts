import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtCard } from './ct-card';

describe('CtCard', () => {
  let component: CtCard;
  let fixture: ComponentFixture<CtCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

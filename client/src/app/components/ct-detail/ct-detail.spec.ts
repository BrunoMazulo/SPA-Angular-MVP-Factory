import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtDetail } from './ct-detail';

describe('CtDetail', () => {
  let component: CtDetail;
  let fixture: ComponentFixture<CtDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

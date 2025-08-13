import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtsHome } from './cts-home';

describe('CtsHome', () => {
  let component: CtsHome;
  let fixture: ComponentFixture<CtsHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtsHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtsHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

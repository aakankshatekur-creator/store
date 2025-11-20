import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apparel } from './apparel';

describe('Apparel', () => {
  let component: Apparel;
  let fixture: ComponentFixture<Apparel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apparel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apparel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

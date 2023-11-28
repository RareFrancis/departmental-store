import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakthiComponent } from './shakthi.component';

describe('ShakthiComponent', () => {
  let component: ShakthiComponent;
  let fixture: ComponentFixture<ShakthiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShakthiComponent]
    });
    fixture = TestBed.createComponent(ShakthiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

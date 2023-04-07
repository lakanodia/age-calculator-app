import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeResultComponent } from './age-result.component';

describe('AgeResultComponent', () => {
  let component: AgeResultComponent;
  let fixture: ComponentFixture<AgeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgeResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

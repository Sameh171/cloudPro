import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItService2Component } from './it-service2.component';

describe('ItService2Component', () => {
  let component: ItService2Component;
  let fixture: ComponentFixture<ItService2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItService2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItService2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

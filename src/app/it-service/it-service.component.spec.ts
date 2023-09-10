import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItServiceComponent } from './it-service.component';

describe('ItServiceComponent', () => {
  let component: ItServiceComponent;
  let fixture: ComponentFixture<ItServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

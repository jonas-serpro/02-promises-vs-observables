import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutarObservableComponent } from './executar-observable.component';

describe('ObservableCallComponent', () => {
  let component: ExecutarObservableComponent;
  let fixture: ComponentFixture<ExecutarObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutarObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutarObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

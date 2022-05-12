import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutarPromiseComponent } from './executar-promise.component';

describe('PromiseCallComponent', () => {
  let component: ExecutarPromiseComponent;
  let fixture: ComponentFixture<ExecutarPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutarPromiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutarPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

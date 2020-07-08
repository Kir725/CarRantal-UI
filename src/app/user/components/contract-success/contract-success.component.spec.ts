import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractSuccessComponent } from './contract-success.component';

describe('ContractSuccessComponent', () => {
  let component: ContractSuccessComponent;
  let fixture: ComponentFixture<ContractSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

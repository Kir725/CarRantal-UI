import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractConditionPageComponent } from './contract-condition-page.component';

describe('ContractConditionPageComponent', () => {
  let component: ContractConditionPageComponent;
  let fixture: ComponentFixture<ContractConditionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractConditionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractConditionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

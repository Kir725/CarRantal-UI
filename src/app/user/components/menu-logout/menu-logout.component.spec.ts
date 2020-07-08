import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLogoutComponent } from './menu-logout.component';

describe('MenuLogoutComponent', () => {
  let component: MenuLogoutComponent;
  let fixture: ComponentFixture<MenuLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

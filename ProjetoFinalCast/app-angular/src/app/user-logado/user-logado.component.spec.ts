import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogadoComponent } from './user-logado.component';

describe('UserLogadoComponent', () => {
  let component: UserLogadoComponent;
  let fixture: ComponentFixture<UserLogadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLogadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserLogadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasPassagensComponent } from './minhas-passagens.component';

describe('MinhasPassagensComponent', () => {
  let component: MinhasPassagensComponent;
  let fixture: ComponentFixture<MinhasPassagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinhasPassagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

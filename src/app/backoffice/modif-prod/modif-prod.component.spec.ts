import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifProdComponent } from './modif-prod.component';

describe('ModifProdComponent', () => {
  let component: ModifProdComponent;
  let fixture: ComponentFixture<ModifProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

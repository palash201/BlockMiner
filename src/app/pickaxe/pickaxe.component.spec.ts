import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickaxeComponent } from './pickaxe.component';

describe('PickaxeComponent', () => {
  let component: PickaxeComponent;
  let fixture: ComponentFixture<PickaxeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickaxeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PickaxeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KunlaboratoriumDemoLibComponent } from './kunlaboratorium-demo-lib.component';

describe('KunlaboratoriumDemoLibComponent', () => {
  let component: KunlaboratoriumDemoLibComponent;
  let fixture: ComponentFixture<KunlaboratoriumDemoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KunlaboratoriumDemoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KunlaboratoriumDemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

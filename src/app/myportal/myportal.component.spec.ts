import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyportalComponent } from './myportal.component';

describe('MyportalComponent', () => {
  let component: MyportalComponent;
  let fixture: ComponentFixture<MyportalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyportalComponent]
    });
    fixture = TestBed.createComponent(MyportalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

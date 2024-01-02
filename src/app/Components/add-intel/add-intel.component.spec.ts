import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntelComponent } from './add-intel.component';

describe('AddIntelComponent', () => {
  let component: AddIntelComponent;
  let fixture: ComponentFixture<AddIntelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddIntelComponent]
    });
    fixture = TestBed.createComponent(AddIntelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

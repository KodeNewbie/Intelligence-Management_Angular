import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyListComponent } from './spy-list.component';

describe('SpyListComponent', () => {
  let component: SpyListComponent;
  let fixture: ComponentFixture<SpyListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpyListComponent]
    });
    fixture = TestBed.createComponent(SpyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

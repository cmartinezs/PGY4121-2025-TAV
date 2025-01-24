import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoordsDistancePage } from './coords-distance.page';

describe('CoordsDistancePage', () => {
  let component: CoordsDistancePage;
  let fixture: ComponentFixture<CoordsDistancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordsDistancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

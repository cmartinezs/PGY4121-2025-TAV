import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanCoordsPage } from './scan-coords.page';

describe('ScanCoordsPage', () => {
  let component: ScanCoordsPage;
  let fixture: ComponentFixture<ScanCoordsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanCoordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

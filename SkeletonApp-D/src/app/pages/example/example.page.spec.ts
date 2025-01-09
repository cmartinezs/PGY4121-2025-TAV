import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExamplePage } from './example.page';

describe('ExamplePage', () => {
  let component: ExamplePage;
  let fixture: ComponentFixture<ExamplePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

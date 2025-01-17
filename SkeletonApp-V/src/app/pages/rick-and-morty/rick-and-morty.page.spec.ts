import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RickAndMortyPage } from './rick-and-morty.page';

describe('RickAndMortyPage', () => {
  let component: RickAndMortyPage;
  let fixture: ComponentFixture<RickAndMortyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RickAndMortyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

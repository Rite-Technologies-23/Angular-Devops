import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroesComponent } from './heroes.component';
import { HEROES } from '../mock-heroes';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroesComponent], // Because it's a standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    compiled = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('[CRITICAL] should display list of heroes', () => {
    // Arrange
    const expectedLength = HEROES.length;

    // Act
    const heroButtons = compiled.querySelectorAll('ul.heroes li button');

    // Assert
    expect(heroButtons.length).toBe(expectedLength);
  });

  it('[CRITICAL] should display selected hero details when clicked', () => {
    // Arrange
    const firstHero = HEROES[0];
    const heroButtons = compiled.querySelectorAll('ul.heroes li button');

    // Act
    (heroButtons[0] as HTMLButtonElement).click();
    fixture.detectChanges();

    // Assert
    const detailSection = compiled.querySelector('div');
    expect(detailSection?.textContent).toContain(firstHero.name.toUpperCase());
  });

  it('[LOW] should update hero name in input box', () => {
    // Arrange
    const heroToSelect = HEROES[1];
    component.onSelect(heroToSelect);
    fixture.detectChanges();
    const input: HTMLInputElement = compiled.querySelector('#hero-name')!;

    // Act
    input.value = 'New Hero';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    // Assert
    expect(component.selectedHero?.name).toBe('New Hero');
  });
});

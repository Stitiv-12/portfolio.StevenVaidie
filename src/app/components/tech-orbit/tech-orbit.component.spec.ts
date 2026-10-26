import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SKILL_CATEGORIES } from '../../data/skills';
import { TechOrbitComponent } from './tech-orbit.component';

@Component({
  imports: [TechOrbitComponent],
  template:
    '@for (category of categories; track category.id) { <app-tech-orbit [category]="category" [instanceId]="category.id" /> }',
})
class MultipleOrbitsHost {
  readonly categories = SKILL_CATEGORIES;
}

describe('TechOrbitComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechOrbitComponent, MultipleOrbitsHost],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('change la catégorie, ses compétences et le lien vers la bonne section', () => {
    const fixture = TestBed.createComponent(TechOrbitComponent);
    fixture.componentRef.setInput('instanceId', 'test-orbit');
    fixture.componentRef.setInput('compact', true);
    fixture.detectChanges();
    const select: HTMLSelectElement =
      fixture.nativeElement.querySelector('select');
    select.value = 'frameworks';
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.orbit-node').length).toBe(
      11,
    );
    expect(
      fixture.nativeElement.querySelector('.orbit-more').getAttribute('href'),
    ).toBe('/competence#frameworks');
    expect(
      fixture.nativeElement.querySelectorAll('.orbit-skill-list button').length,
    ).toBe(11);
  });

  it('sélectionne une compétence depuis le diagramme ou sa liste avec une note lisible', () => {
    const fixture = TestBed.createComponent(TechOrbitComponent);
    fixture.componentRef.setInput('instanceId', 'test-orbit');
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll(
      '.orbit-node',
    ) as NodeListOf<HTMLButtonElement>;
    buttons[1].click();
    fixture.detectChanges();
    expect(buttons[1].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('false');
    expect(
      fixture.nativeElement.querySelector('#test-orbit-description')
        .textContent,
    ).toContain('Figma');
    expect(
      fixture.nativeElement.querySelector('#test-orbit-description')
        .textContent,
    ).toContain('2 / 5');
    fixture.nativeElement.querySelector('.orbit-skill-list button').click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('#test-orbit-description')
        .textContent,
    ).toContain('CSS/HTML');
  });

  it('affiche une compétence sans note sans la placer sur un cercle', () => {
    const fixture = TestBed.createComponent(TechOrbitComponent);
    fixture.componentRef.setInput('instanceId', 'test-orbit');
    fixture.componentRef.setInput(
      'category',
      SKILL_CATEGORIES.find((category) => category.id === 'tests'),
    );
    fixture.detectChanges();
    const list = fixture.nativeElement.querySelectorAll(
      '.orbit-skill-list button',
    ) as NodeListOf<HTMLButtonElement>;
    list[1].click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.orbit-node').length).toBe(
      2,
    );
    expect(
      fixture.nativeElement.querySelector('#test-orbit-description')
        .textContent,
    ).toContain('Non noté dans le CV');
    expect(
      fixture.nativeElement.querySelectorAll('.orbit-node[aria-pressed="true"]')
        .length,
    ).toBe(0);
  });

  it('replie seulement la liste de l’aperçu et permet de la déplier sans perdre la sélection', () => {
    const fixture = TestBed.createComponent(TechOrbitComponent);
    fixture.componentRef.setInput('instanceId', 'compact-test');
    fixture.componentRef.setInput('compact', true);
    fixture.detectChanges();
    const details: HTMLDetailsElement =
      fixture.nativeElement.querySelector('details');
    expect(details.open).toBeFalse();
    expect(
      fixture.nativeElement
        .querySelector('.orbit-plot')
        .classList.contains('sparse'),
    ).toBeTrue();
    fixture.nativeElement.querySelector('summary').click();
    expect(details.open).toBeTrue();
    fixture.nativeElement
      .querySelectorAll('.orbit-skill-list button')[1]
      .click();
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.orbit-info').textContent,
    ).toContain('Figma');
    fixture.nativeElement.querySelector('summary').click();
    expect(details.open).toBeFalse();
    expect(
      fixture.nativeElement.querySelector('.orbit-info').textContent,
    ).toContain('Figma');
    fixture.componentRef.setInput('compact', false);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('details')).toBeNull();
    expect(
      fixture.nativeElement.querySelectorAll('.orbit-skill-list button').length,
    ).toBe(2);
  });

  it('ne duplique aucun identifiant entre les sept diagrammes et relie les contrôles aux détails', () => {
    const fixture = TestBed.createComponent(MultipleOrbitsHost);
    fixture.detectChanges();
    const ids = Array.from(
      fixture.nativeElement.querySelectorAll('[id]') as NodeListOf<HTMLElement>,
    ).map((element) => element.id);
    expect(new Set(ids).size).toBe(ids.length);
    const controls = Array.from(
      fixture.nativeElement.querySelectorAll(
        '[aria-controls]',
      ) as NodeListOf<HTMLElement>,
    );
    for (const element of controls)
      expect(ids).toContain(element.getAttribute('aria-controls')!);
  });
});

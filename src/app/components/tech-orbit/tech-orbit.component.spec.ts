import { TestBed } from '@angular/core/testing';
import { TechOrbitComponent } from './tech-orbit.component';

describe('TechOrbitComponent', () => {
  it('change l’explication et l’état accessible lors de la sélection d’une facette', async () => {
    await TestBed.configureTestingModule({
      imports: [TechOrbitComponent],
    }).compileComponents();
    const fixture = TestBed.createComponent(TechOrbitComponent);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll(
      '.orbit-node',
    ) as NodeListOf<HTMLButtonElement>;
    buttons[2].click();
    fixture.detectChanges();
    expect(buttons[2].getAttribute('aria-pressed')).toBe('true');
    expect(buttons[0].getAttribute('aria-pressed')).toBe('false');
    expect(
      fixture.nativeElement.querySelector('#orbit-description').textContent,
    ).toContain('SQL · Neo4j');
  });
});

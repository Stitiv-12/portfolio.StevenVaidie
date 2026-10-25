import { TestBed } from '@angular/core/testing';
import { ProjectGalleryComponent } from './project-gallery.component';

describe('ProjectGalleryComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectGalleryComponent],
    }).compileComponents();
  });

  it('filtre les projets mobiles et permet de revenir à toute la sélection', () => {
    const fixture = TestBed.createComponent(ProjectGalleryComponent);
    fixture.detectChanges();
    const filters = Array.from(
      fixture.nativeElement.querySelectorAll('.filters button'),
    ) as HTMLButtonElement[];
    filters.find((button) => button.textContent?.trim() === 'Mobile')!.click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('article').length).toBe(1);
    expect(fixture.nativeElement.querySelector('h3').textContent).toContain(
      'Sanatio',
    );
    expect(
      fixture.nativeElement.querySelector('.project-count').textContent,
    ).toContain('1 PROJET');
    filters[0].click();
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('article').length).toBe(8);
  });

  it('affiche le cas détaillé et un seul projet ouvert à la fois', () => {
    const fixture = TestBed.createComponent(ProjectGalleryComponent);
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll(
      '.project-details-button',
    ) as NodeListOf<HTMLButtonElement>;
    buttons[0].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('true');
    expect(
      fixture.nativeElement.querySelector('#details-sanatio-app-mobile').hidden,
    ).toBeFalse();
    expect(
      fixture.nativeElement.querySelector('#details-sanatio-app-mobile')
        .textContent,
    ).toContain('sept personnes');
    buttons[1].click();
    fixture.detectChanges();
    expect(buttons[0].getAttribute('aria-expanded')).toBe('false');
    expect(buttons[1].getAttribute('aria-expanded')).toBe('true');
  });

  it('conserve les identifiants historiques des projets et les liens de code', () => {
    const fixture = TestBed.createComponent(ProjectGalleryComponent);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('#stage-2eme-annee-en-entreprise'),
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector(
        'a[href="https://github.com/Stitiv-12/Sanatio-App"]',
      ),
    ).toBeTruthy();
  });

  it('limite la sélection de l’accueil à trois projets', () => {
    const fixture = TestBed.createComponent(ProjectGalleryComponent);
    fixture.componentRef.setInput('featured', true);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('article').length).toBe(3);
    expect(fixture.nativeElement.querySelector('.filters')).toBeNull();
  });
});

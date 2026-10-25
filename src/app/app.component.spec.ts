import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideRouter([{ path: 'projects', component: ProjectsComponent }]),
      ],
    }).compileComponents();
  });

  it('propose une navigation vers les quatre pages du portfolio', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const links = Array.from(
      fixture.nativeElement.querySelectorAll('nav a'),
    ) as HTMLAnchorElement[];
    expect(links.slice(0, 4).map((link) => link.getAttribute('href'))).toEqual([
      '/',
      '/projects',
      '/about',
      '/competence',
    ]);
  });

  it('ouvre le menu puis permet de le fermer avec Échap', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('.menu-toggle');
    button.click();
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('true');
    button.style.display = 'block';
    fixture.nativeElement.querySelector('nav a').focus();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();
    expect(button.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(button);
  });

  it('préserve le focus quand Échap est utilisé hors du menu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const wordmark: HTMLAnchorElement =
      fixture.nativeElement.querySelector('.wordmark');
    wordmark.focus();
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    expect(document.activeElement).toBe(wordmark);
  });

  it('conserve la page courante pour les liens internes d’accès au contenu', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/projects');
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector('.skip-link').getAttribute('href'),
    ).toBe('/projects#main-content');
    expect(
      fixture.nativeElement
        .querySelector('.footer-bottom a')
        .getAttribute('href'),
    ).toBe('/projects#main-content');
  });

  it('fournit des liens réels de contact et de consultation du CV', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(
      fixture.nativeElement.querySelector(
        'a[href="mailto:steven.vaidie10@gmail.com"]',
      ),
    ).toBeTruthy();
    expect(
      fixture.nativeElement.querySelector('a[href="assets/documents/cv.pdf"]'),
    ).toBeTruthy();
  });
});

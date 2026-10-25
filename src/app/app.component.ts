import {
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PROFILE } from './data/portfolio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private readonly router = inject(Router);
  readonly profile = PROFILE;
  readonly mainAnchor = signal(this.router.url.split('#')[0] + '#main-content');
  readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');
  readonly menuOpen = signal(false);

  /** Referme la navigation mobile après un changement de page. */
  constructor() {
    this.router.events.pipe(takeUntilDestroyed()).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.menuOpen.set(false);
        this.mainAnchor.set(
          event.urlAfterRedirects.split('#')[0] + '#main-content',
        );
      }
    });
  }

  /** Referme le menu au clavier et rend le focus à son bouton. */
  @HostListener('document:keydown.escape')
  closeMenu(): void {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.menuButton()?.nativeElement.focus();
    }
  }
}

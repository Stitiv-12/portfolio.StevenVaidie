import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-intro',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile-intro.component.html',
  styleUrl: './profile-intro.component.css',
})
export class ProfileIntroComponent {}

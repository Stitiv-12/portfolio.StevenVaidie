import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgFor],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profileImage = 'assets/images/profile/moi.jpg';
  name = 'Steven Vaidie';
  subtitle = 'Développeur Web Front-End passionné';
  description = 'Je conçois des interfaces modernes, accessibles et performantes. Mon objectif est de transformer des idées en expériences numériques fluides.';
  email = 'steven.vaidie10@gmail.com';
  phone = '06 51 55 91 11';
  socialMediaLinks= [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/steven-vaidie-ab1234267/' },
    { name: 'GitHub', url: 'https://github.com/Stitiv-12'}
  ]
  projects = [{name: 'Mon Portfolio', url: 'http://localhost:4200/' , description : 'Portfolio réaliser avec Angular et Bootstrap 5.2.3' , image : '/img/portfolio/portfolio.png'},];
    
  
}

import { Component } from '@angular/core';
import 'animate.css';
import { ButtonComponent } from '../../core/layout/button/button.component';
import { Router } from '@angular/router';
import {MatButton} from '@angular/material/button';


@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent, MatButton],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss'
})

export class AboutMe {

  lang: 'pt' | 'en' = 'pt';

  texts = {
    pt: {
      title: 'Olá, eu sou',
      name: 'Mateus Costa',
      subtitle: 'Sou um desenvolvedor em desenvolvimento a 3 anos de estudo e alto desenvolvimento',
      presentation: 'Olá! Sou um desenvolvedor em desenvolvimento, 3 anos de estudo e alto desenvolvimento na criação de soluções digitais que geram impacto real. Atualmente estou no 4º período da faculdade de Engenharia de Software buscando sempre me desenvolver ainda mais.',
      buttonWork: 'Conheça mais sobre meu trabalho',
      buttonCV: 'Baixar CV',
      sectionTitle: 'Sobre mim'
    },
    en: {
      title: 'Hello, I am',
      name: 'Mateus Costa',
      subtitle: 'I am a developer in development with 3 years of study and self-improvement',
      presentation: 'Hello! I am a developer in development, with 3 years of study and strong self-improvement in creating digital solutions that generate real impact. I am currently in the 4th semester of Software Engineering, always striving to further improve myself.',
      buttonWork: 'Learn more about my work',
      buttonCV: 'Download CV',
      sectionTitle: 'About me'
    }
  };

  constructor(private router: Router) {}

  handleButtonClick() {
    this.router.navigate(['/projects']);
  }

  // Troca de idioma
  changeLanguage(lang: 'pt' | 'en') {
    this.lang = lang;
  }
}

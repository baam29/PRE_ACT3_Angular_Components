import { ProfileCard } from './profile-card/profile-card';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';
import { Personal } from './personal/personal';

@Component({
  imports: [RouterOutlet, ProfileCard, Header, Skills, Personal, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  fullName = 'Brent Mar Balajadia';
  location = 'Porac, Pampanga';
  email = 'bsbalajadia@student.hau.edu.ph';
  phone = '0992 852 4958';

  profile = 'I am a WEBDEV student, already in thrid year. Im currently studying Advanced Dynamic Web Application. This subject is fun to do.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'VUE',
    'Angular',
    'PHP',
    'Dart'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  interests = [
    'Building web applications',
    'Learning new technologies',
    'Creative design',
    'Playing games',
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }

  onInterestSelected(interest: string) {
    this.message = `Personal interest: ${interest}`;
  }
}

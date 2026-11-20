import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.html',
  styleUrl: './personal.css'
})
export class Personal {
  fullName = input.required<string>();
  location = input.required<string>();
  interests = input.required<string[]>();

  interestSelected = output<string>();

  selectInterest(interest: string) {
    this.interestSelected.emit(interest);
  }
}

import { Component } from '@angular/core';
import { AgeValidator } from "./custom-validators/age.validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-form';
}

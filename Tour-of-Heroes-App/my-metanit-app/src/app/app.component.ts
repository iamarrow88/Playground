import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Metanit App';
  nameUser: string = 'Jane';
  ageUser: number = 19;
  counter: number = 0;
  superChange(bool: any): void {
    if (bool) {
      this.counter++;
    } else {
      this.counter--;
    }
  }

}

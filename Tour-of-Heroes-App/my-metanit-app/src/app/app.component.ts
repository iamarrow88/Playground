import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Metanit App';
  nameUser: string = 'Jane';
  condition: boolean = false;
  ageUser: number = 19;
  counter: number = 0;
  count: number = 9;
  superChange(bool: any): void {
    if (bool) {
      this.counter++;
    } else {
      this.counter--;
    }
  }
  getName(name: string) {
    console.log(`I get the name: ${name}`)
  }
  getDescr(description: string) {
    console.log(`I get the description: ${description}`)
  }

  toggle() {
    this.condition = !this.condition;
  }
}

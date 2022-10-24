import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  color: string = 'green';

  /*changeColor(): void {
    function RGB() {
      return Math.floor(Math.random() * 256)
    }
    let newColor = [];
    for (let i = 0; i < 3; i++) {
      newColor.push(RGB());
    }
    console.log(newColor.join(','));
    this.color = newColor.join(',');
  }*/


}

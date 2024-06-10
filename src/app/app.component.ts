import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BoardComponent],
  template: `
    <div class="bg-black w-screen h-screen grid place-content-center">
      <app-board />
    </div>
  `,
})
export class AppComponent {
  title = 'Jezz game';
}

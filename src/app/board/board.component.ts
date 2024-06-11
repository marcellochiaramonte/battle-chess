import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { GridsterComponent, GridsterItemComponent } from 'angular-gridster2';

export enum Piece {
  WHITE_PAWN = 'WHITE_PAWN',
  WHITE_ROOK = 'WHITE_ROOK',
  WHITE_KNIGHT = 'WHITE_KNIGHT',
  WHITE_BISHOP = 'WHITE_BISHOP',
  WHITE_QUEEN = 'WHITE_QUEEN',
  WHITE_KING = 'WHITE_KING',

  BLACK_PAWN = 'BLACK_PAWN',
  BLACK_ROOK = 'BLACK_ROOK',
  BLACK_KNIGHT = 'BLACK_KNIGHT',
  BLACK_BISHOP = 'BLACK_BISHOP',
  BLACK_QUEEN = 'BLACK_QUEEN',
  BLACK_KING = 'BLACK_KING',
}

export type Board = Map<string, Piece>;

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    CommonModule,
    SquareComponent,
    GridsterComponent,
    GridsterItemComponent,
  ],
  template: `
    <div>
      <div class="p-4 bg-gray">
        <div class="grid grid-cols-8 outline-1 outline-color-black">
          <ng-container *ngFor="let row of rows">
            <ng-container *ngFor="let col of cols">
              <app-square [position]="col + row" [board]="board"></app-square>
            </ng-container>
          </ng-container>
        </div>
      </div>
      <!--
      <gridster [options]="options">
        @for (item of board; track item) {
        <gridster-item [item]="item">
          <div>item</div>
        </gridster-item>
        }
      </gridster>
    </div> -->
    </div>
  `,
})
export class BoardComponent {
  cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  rows = ['1', '2', '3', '4', '5', '6', '7', '8'].reverse();

  options = {};

  constructor() {
    this.convertCartesianToXY('a1'),
      this.convertCartesianToXY('b2'),
      this.convertCartesianToXY('c3'),
      this.convertCartesianToXY('d4'),
      this.convertCartesianToXY('e5'),
      this.convertCartesianToXY('f6'),
      this.convertCartesianToXY('g7'),
      this.convertCartesianToXY('h8');

    this.translateXYToCartesian(0, 0);
    this.translateXYToCartesian(1, 1);
    this.translateXYToCartesian(2, 2);
    this.translateXYToCartesian(7, 7);
  }

  convertCartesianToXY(position: string) {
    const offset = 'a'.charCodeAt(0);
    const translation = {
      x: position.charCodeAt(0) - offset,
      y: 8 - parseInt(position.charAt(1)),
    };
    console.log({
      position: position,
      translation: translation,
    });

    return translation;
  }

  translateXYToCartesian(x: number, y: number) {
    const offset = 'a'.charCodeAt(0);
    const position = String.fromCharCode(offset + x).concat((8 - y).toString());

    console.log({
      position: position,
      translation: {
        x: x,
        y: y,
      },
    });

    return position;
  }

  board: Board = new Map([
    // White figures
    ['a1', Piece.WHITE_ROOK],
    ['b1', Piece.WHITE_KNIGHT],
    ['c1', Piece.WHITE_BISHOP],
    ['d1', Piece.WHITE_QUEEN],
    ['e1', Piece.WHITE_KING],
    ['f1', Piece.WHITE_BISHOP],
    ['g1', Piece.WHITE_KNIGHT],
    // White Pawns
    ['h1', Piece.WHITE_ROOK],
    ['a2', Piece.WHITE_PAWN],
    ['b2', Piece.WHITE_PAWN],
    ['c2', Piece.WHITE_PAWN],
    ['d2', Piece.WHITE_PAWN],
    ['e2', Piece.WHITE_PAWN],
    ['f2', Piece.WHITE_PAWN],
    ['g2', Piece.WHITE_PAWN],
    ['h2', Piece.WHITE_PAWN],
    // Black pawns
    ['a7', Piece.BLACK_PAWN],
    ['b7', Piece.BLACK_PAWN],
    ['c7', Piece.BLACK_PAWN],
    ['d7', Piece.BLACK_PAWN],
    ['e7', Piece.BLACK_PAWN],
    ['f7', Piece.BLACK_PAWN],
    ['g7', Piece.BLACK_PAWN],
    ['h7', Piece.BLACK_PAWN],
    // Black Figures
    ['a8', Piece.BLACK_ROOK],
    ['b8', Piece.BLACK_KNIGHT],
    ['c8', Piece.BLACK_BISHOP],
    ['d8', Piece.BLACK_QUEEN],
    ['e8', Piece.BLACK_KING],
    ['f8', Piece.BLACK_BISHOP],
    ['g8', Piece.BLACK_KNIGHT],
    ['h8', Piece.BLACK_ROOK],
  ]);
}

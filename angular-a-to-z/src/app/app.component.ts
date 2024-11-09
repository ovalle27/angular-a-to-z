import { Component, IterableDiffers } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // items = [
  //   new WishItem('To Learn Angular'),
  //   new WishItem('Have some coffee', true),
  //   new WishItem('Find grass that cuts itself')
  // ];
  items : WishItem[] = [
    new WishItem('To Learn Angular'),
    // new WishItem('Have some coffee', true),
    // new WishItem('Find grass that cuts itself')
  ];

  title = 'Whish List';
}

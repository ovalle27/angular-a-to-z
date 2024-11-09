import { Component, IterableDiffers } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = [
    new WishItem('To Learn Angular'),
    new WishItem('Have some coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  title = 'Whish List';
}

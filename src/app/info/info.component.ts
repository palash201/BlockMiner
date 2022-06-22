import { Component, OnInit } from '@angular/core';
import { player } from '../player';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  player = player;

  constructor() { }

  ngOnInit(): void {
  }

}

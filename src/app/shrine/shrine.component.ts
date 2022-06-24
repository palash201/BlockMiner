import { Component, OnInit } from '@angular/core';
import { Building } from '../building';
import { player } from '../player';

@Component({
  selector: 'app-shrine',
  templateUrl: './shrine.component.html',
  styleUrls: ['./shrine.component.css']
})
export class ShrineComponent implements OnInit {

  player = player;
  shrine = Building.Shrine;
  quarry = Building.Quarry;

  constructor() { }

  ngOnInit(): void {
  }

}

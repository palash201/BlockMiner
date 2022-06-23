import { Component, OnInit } from '@angular/core';
import { Building } from '../building';
import { Stone } from '../currency';
import { player } from '../player';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {

  player = player;
  Stone = Stone;
  quarry = Building.Quarry;
  forge = Building.Forge;
  shrine = Building.Shrine;

  constructor() { }

  ngOnInit(): void {
  }

}

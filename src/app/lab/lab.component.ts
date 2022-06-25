import { Component, OnInit } from '@angular/core';
import { Building } from '../building';
import { Emeralds } from '../currency';
import { player } from '../player';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  player = player;
  lab = Building.Lab;
  quarry = Building.Quarry;
  researchList = ['Wisdom', 'Haste', 'Construction', 'Enchanting', 'Archaeology'];
  console = console;
  Emeralds = Emeralds;

  constructor() { }

  ngOnInit(): void {
  }

}

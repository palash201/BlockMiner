import { Component, OnInit } from '@angular/core';
import { Rubies, Stone } from '../currency';
import { enchantList, Enchantment } from '../enchantment';
import { Pickaxe } from '../pickaxe';
import { player } from '../player';

@Component({
  selector: 'app-pickaxe',
  templateUrl: './pickaxe.component.html',
  styleUrls: ['./pickaxe.component.css']
})
export class PickaxeComponent implements OnInit {

  player = player;
  pickaxe: Pickaxe = player.pickaxe;
  convertToRoman: Function = convertToRoman;
  enchantList = enchantList;
  Stone = Stone;
  Rubies = Rubies;

  constructor() {
    
  }

  ngOnInit(): void {
  }

  

}

let romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];

function convertToRoman(num: number | undefined): string {
  if (num === undefined) {
    return 'NaN';
  }
  if (num === 0) {
    return '';
  }
  for (var i = 0; i < romanMatrix.length; i++) {
    if (num >= romanMatrix[i][0]) {
      let sub = romanMatrix[i][0];
      if (typeof sub == "number")
        return romanMatrix[i][1] + convertToRoman(num - sub);
    }
  }
  return '';
}
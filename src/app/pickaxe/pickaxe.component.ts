import { Component, OnInit } from '@angular/core';
import { Enchantment } from '../enchantment';
import { player } from '../player';

@Component({
  selector: 'app-pickaxe',
  templateUrl: './pickaxe.component.html',
  styleUrls: ['./pickaxe.component.css']
})
export class PickaxeComponent implements OnInit {

  pickaxe = player.pickaxe;

  constructor() { }

  ngOnInit(): void {
    
  }

  romanMatrix = [
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

  convertToRoman(num: number | undefined): string {
    if (num === undefined) {
      return 'NaN';
    }
    if (num === 0) {
      return '';
    }
    for (var i = 0; i < this.romanMatrix.length; i++) {
      if (num >= this.romanMatrix[i][0]) {
        let sub = this.romanMatrix[i][0];
        if (typeof sub == "number")
          return this.romanMatrix[i][1] + this.convertToRoman(num - sub);
      }
    }
    return '';
  }

}

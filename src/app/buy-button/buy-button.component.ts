import { Component, Input, OnInit } from '@angular/core';
import { Currency, Stone } from '../currency';

@Component({
  selector: 'app-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.css']
})
export class BuyButtonComponent implements OnInit {

  @Input() buyType: "Unlock" | "Upgrade" | "+1" = "Unlock"
  @Input() displayBuyType: boolean = true;
  @Input() purchaseName: string = "Example Name";
  @Input() displayPurchaseName: boolean = true;
  @Input() currency: Currency = Stone;
  @Input() cost: number = 1;
  @Input() costType: "Single" | "CostMap" = "Single"
  @Input() costMap: Map<Currency, number> = new Map<Currency, number>();
  @Input() hidden: boolean = false;
  inf = Infinity;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { wipeData } from '../save';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.css']
})
export class BottomBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  wipeSave() {
    wipeData();
  }
}

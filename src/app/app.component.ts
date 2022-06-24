import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { autosave_delay, tick, tick_delay } from './game';
import { icons } from './icons';
import { saveData } from './save';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlockMiner';
  icons = icons;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    icons.forEach((path: string, name: string) => {
      this.addIconToRegistry(name, path)
    });
    window.setInterval(tick, tick_delay);
    window.setInterval(saveData, autosave_delay);
    window.addEventListener("beforeunload", function (e) {
      saveData();
    });
  }
  addIconToRegistry(name: string, path: string) {
    this.matIconRegistry.addSvgIcon(
      name,
      this.domSanitizer.bypassSecurityTrustResourceUrl(path),
    );
  }
}
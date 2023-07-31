import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogomarkSvgComponent } from '../svg/logomark-svg.component';
import { LogotypeSvgComponent } from '../svg/logotype-svg.component';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule, LogomarkSvgComponent, LogotypeSvgComponent],
  template: `
    <app-logomark-svg />
    <app-logotype-svg />
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      gap: 7.5px;
    }
  `]
})
export class LogoComponent {

}

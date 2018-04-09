import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-text-menu',
  templateUrl: './text-menu.component.html',
  styleUrls: ['./text-menu.component.scss']
})

export class HeaderTextMenuComponent {
    @Input() text: string;
    @Input() path: string;
}
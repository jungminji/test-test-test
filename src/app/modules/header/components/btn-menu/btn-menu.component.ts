import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-btn-menu',
  templateUrl: './btn-menu.component.html',
  styleUrls: ['./btn-menu.component.scss']
})

export class HeaderBtnMenuComponent {
    @Input() color: string;
    @Input() text: string;

    setColor(): any {
        switch (this.color) {
            case 'blue':
            return {
                color: '#FFF',
                backgroundColor: '#2677CC',
                borderColor: '#2677CC'
            }
            default:
            return {
                color: '#FFF',
                borderColor: '#FFF'
            }
        }
    }
}
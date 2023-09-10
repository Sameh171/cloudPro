import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
@Input() button:boolean =false;
@Input() header:String| null =null;
@Input() text:String| null =null;
@Input() height:String| null =null;
@Input() image:String| null =null;
}

import { Component } from '@angular/core';
import memberData from '../../assets/members.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  Members: any = memberData;
}

import { Component, OnInit } from '@angular/core';
import { MydataService} from "../mydata.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  myh1: boolean = false;

  members: any;

  constructor(private mydata: MydataService) { }

  ngOnInit(): void {
    this.mydata.getData().subscribe(mydata => {
      this.members = mydata
      console.log(this.members)
    })
  }

  justClick() {
    // console.log('Yes! You clicked the button!');
    this.myh1 = true;
    this.mydata.btnClick();
  }
}

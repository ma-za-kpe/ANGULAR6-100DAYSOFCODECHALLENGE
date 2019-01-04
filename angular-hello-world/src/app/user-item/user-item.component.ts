import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

@Input() name: string; // name property

  constructor() {
    // this.name = 'MAZAKPE'; // SET THE NAME
}

  ngOnInit() {
  }

}

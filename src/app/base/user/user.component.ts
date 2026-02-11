import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/users/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  @Input()
  u:any;
  
  ngOnInit(): void {
    
    
    
  }
  

}

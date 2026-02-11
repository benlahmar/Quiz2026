import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/users/user.service';
import { UserComponent } from "../user/user.component";
import { AiService } from '../../services/ai/gemini.service';

@Component({
  selector: 'app-list-user',
  imports: [UserComponent],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{

  users:any
  result:any;
  constructor(private uservice:UserService, private ai : AiService)
  {

  }
  ngOnInit(): void {
    this.uservice.getusers().subscribe(data=>{
      this.users=data;
    });
    this.ai.getAiExplanation("coment implementer cette exigence Verify that the application has defenses against HTTP parameter pollution attacks, particularly if the application framework makes no distinction about the source of request parameters (GET, POST, cookies, headers, or environment variables). avec java ").then(d=>{
      console.log(d)
      this.result=d;
    })
  }

}

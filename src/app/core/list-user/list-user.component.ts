import { Component } from '@angular/core';
import { UserService } from '../../g1/services/user.service';
import { AiService } from '../../services/ai/gemini.service';

@Component({
  selector: 'list-user',
  imports: [],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {

  users:any;
  constructor(private service:UserService, private aiservice:AiService){
   service.getusers().subscribe(d=>{
    this.users=d;
   });
  let ex1="Verify that a Content Security Policy (CSP) response header is in place that helps mitigate impact for XSS attacks like HTML, DOM, JSON, and JavaScript injection vulnerabilities."
   let rep=aiservice.getAiExplanation("role: Expert en securiyé applicatif, context explication des exigences asvs 5, objectif donner des explication sur cette exigence "+ex1+" format json")

   rep.then(d=>{
    console.log(d)
   })
    
  }


}

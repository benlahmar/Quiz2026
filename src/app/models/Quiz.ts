import { Question } from "./question";
import { Config } from "./config";

export class Quiz{
    id:number;
    name:string;
    description:string;
    questions:Question[];
    config:Config;

    constructor(data:any){
        this.id=data.id;
        this.name=data.name;
        this.description=data.description;
        this.config=data.config;
        this.questions=[];
        for(let q of data.questions){
            this.questions.push(new Question(q));
        }
    }
}
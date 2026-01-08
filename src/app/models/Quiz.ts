import { Question } from "./question";

export class Quiz{
    id:number;
    name:string;
    description:string;
    questions:Question[];

    constructor(data:any){
        this.id=data.id;
        this.name=data.name;
        this.description=data.description;
        this.questions=[];
        for(let q of data.questions){
            this.questions.push(new Question(q));
        }
    }
}
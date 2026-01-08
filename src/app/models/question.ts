import { Option } from "./option";

export class Question{
    id:number;
    name:string;
    questionTypeId:number;
    options:Option[];
    constructor(data:any){
        this.id=data.id;
        this.name=data.name;
        this.questionTypeId=data.questionTypeId;
        this.options=[];
        for(let o of data.options){
            this.options.push(new Option(o));
        }

    }

}
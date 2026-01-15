export class Config{
    allowBack:boolean;
    allowReview:boolean;
    autoMove:boolean;
    duration:number;  // in minutes
    pageSize:number;
    requiredAll:boolean
    richText:boolean;
    shuffleQuestions:boolean;
    showClock: boolean ;
    showPager: boolean ;

    constructor(data:any){
        this.allowBack=data.allowBack;
        this.allowReview=data.allowReview;
        this.autoMove=data.autoMove;
        this.duration=data.duration;
        this.pageSize=data.pageSize;
        this.requiredAll=data.requiredAll;
        this.richText=data.richText;
        this.shuffleQuestions=data.shuffleQuestions;
        this.showClock=data.showClock;
        this.showPager=data.showPager;
    }
}
export class GalleryImage{
    title: string;
    description: string;
    link: string;
    upvotes: number;
    downvotes: number;
    score: number;

    constructor(title: string, description: string, link: string, upvotes: number, downvotes:number, score:number){
        this.title = title;
        this.description = description;
        this.link = link;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.score = score;
    };
}


import { Observable } from "rxjs";
import { Commentaire } from "./commentaire";
import { User } from "./user";

export class Publication{
    publicationId: number;
    titrePublication : string ;
    contenuPublication : string;
    description : string;
    commentaires:Observable<Commentaire[]>;
    commentsNumber:number;
    dateCreation:Date;
    user:User;
    constructor(
        titrePublication : string,
        contenuPublication : string,
        description : string
    ){}
}
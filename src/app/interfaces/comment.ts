import { Srevices } from "../enums/srevices";

export interface Comment {
    Id:number,
    ServiceType:Srevices,
    Text?:string,
    Name?:string,
    Likes?:number,
    Date:Date
}

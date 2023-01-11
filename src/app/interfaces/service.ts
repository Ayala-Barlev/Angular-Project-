import { Srevices } from "../enums/srevices";
export interface Service {
    Id:number;
    ServiceType:Srevices,
    Description:string,
    Details:string,
    ExperienceYears:number,
    PlaceOfStudy:string
}

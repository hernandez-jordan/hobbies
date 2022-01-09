import { HobbyDto } from './hobby.dto';

//The server sends a list of all hobbies when the client requests it
export class HobbyListDto {  
    hobbies: HobbyDto[];
}


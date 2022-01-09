import { HobbyDto } from "src/hobby/dto/hobby.dto";
import { HobbyEntity } from "src/hobby/entity/hobby.entity";

//FIXME: add mapper library? 
// converts HobbyEntity into a HobbyDto object
export const toHobbyDto = (data: HobbyEntity): HobbyDto => {  
    const { id, name, description } = data;

    let HobbyDto: HobbyDto = { id, name, description, };
    return HobbyDto;
    
};

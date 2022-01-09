import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { hobbies } from 'src/mock/hobbies.mock';
import { toHobbyDto } from 'src/shared/mapper';
import { toPromise } from 'src/shared/util';
import { v4 as uuidv4 } from 'uuid';
import { HobbyCreateDto } from './dto/hobby.create.dto';
import { HobbyDto } from './dto/hobby.dto';
import { HobbyEntity } from './entity/hobby.entity';

@Injectable()
export class HobbyService {
    hobbies:HobbyEntity[] = hobbies

    //get one hobby base on id param
    async getOneHobby(id:string): Promise<HobbyDto>{
        const hobby = this.hobbies.find(hobby => hobby.id === id)

        if(!hobby){
            throw new HttpException(`hobby doesn't exist`, HttpStatus.BAD_REQUEST)
        }

        return toPromise(toHobbyDto(hobby))
    }

    //get all hobbies
    async getAllHobby():Promise<HobbyDto[]>{
        const hobbies = this.hobbies
        return hobbies.map(hobby => toHobbyDto(hobby))
    }

    //create one hobby
    async createHobby(hobbyDto : HobbyCreateDto): Promise<HobbyDto>{
        const {name , description} = hobbyDto

        const hobby:HobbyEntity = {
            id: uuidv4(),
            name,
            description,
        };

        this.hobbies.push(hobby)
        return toPromise(toHobbyDto(hobby))
    }

}

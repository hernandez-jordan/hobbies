import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { toPromise } from 'src/shared/util';
import { HobbyCreateDto } from './dto/hobby.create.dto';
import { HobbyDto } from './dto/hobby.dto';
import { HobbyListDto } from './dto/hobby.list.dto';
import { HobbyService } from './hobby.service';


@Controller("api/hobbies")
export class HobbyController {  
    //controller injects the hobbyService and redirects the work of the route handler to the service.
    constructor(private readonly hobbyService: HobbyService) {}
    @Get()  
    //making use of the async/await pattern, ensuring fast-running handlers
    async findAll(): Promise<HobbyListDto> {    
        //The findAll() route handler redirects its output by calling the service's getAllHobby() function to return all hobby items.    
        const hobbies = await this.hobbyService.getAllHobby();        

        //making use of the helper function in util by returning a promise
        return toPromise({ hobbies }); 
    }

    //decorator annotates the findOne() function and specifies a route parameter
    @Get(":id")  
    async findOne(@Param("id") id: string): Promise<HobbyDto> {   
        return await this.hobbyService.getOneHobby(id);  
    }

    @Post()    
    //extracts the payload of the function from the incoming request and converts the data into an instance of the HobbyCreateDto object
    async create(@Body() hobbyCreateDto: HobbyCreateDto): Promise<HobbyDto> {    
        return await this.hobbyService.createHobby(hobbyCreateDto);  
    }

    @Put(":id")

    /** 8 */  
    async update(    
        @Param("id") id: string,
        @Body() hobbyDto: HobbyDto  
    ): Promise<HobbyDto> { 
    // return await this.hobbyService.updateHobby(hobbyDto);  
    return
    }

    @Delete(":id")  
    async remove(@Param("id") id: string): Promise<HobbyDto> {  
        // return await this.hobbyService.removeHobby(id);  
        return
    }
}

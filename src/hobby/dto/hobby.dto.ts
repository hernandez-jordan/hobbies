// server sends the client a HobbyDto when the client requests or updates a single hobby item
 export class HobbyDto {  
    id: string; 
    name: string; 
    description?: string;
}
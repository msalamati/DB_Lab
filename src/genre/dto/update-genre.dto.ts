import { ApiProperty } from '@nestjs/swagger';

export default class UpdateGenreDto {
    @ApiProperty({type: "number" ,description:"Genre ID"}) 
    readonly id: number;
    @ApiProperty({type: "string" ,description:"New Name"}) 
    readonly type: string;
}
import { ApiProperty } from "@nestjs/swagger";

export default class CreateUserDto {
    @ApiProperty({type: "string", description: "User Name"})
    readonly name: string;
    @ApiProperty({type: "array", items: {type: "number"}, description: "User Books IDs"})
    readonly books: number[];

    @ApiProperty({type: "string" ,description:"Username"})
    readonly username: string;
    @ApiProperty({type: "string" ,description:"Password"})
    readonly password: string;
}
import { ApiProperty } from "@nestjs/swagger";

export default class CreateEmployerDto {
    @ApiProperty({type: "string", description: "Employer Name"})
    readonly name: string;
    @ApiProperty({type: "array", items: {type: "number"}, description: "User Projects IDs"})
    readonly projects: number[];

    @ApiProperty({type: "string" ,description:"Username"})
    readonly username: string;
    @ApiProperty({type: "string" ,description:"Password"})
    readonly password: string;
}
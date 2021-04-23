import { ApiProperty } from "@nestjs/swagger";

export default class CreateFreelancerDto {
    @ApiProperty({type: "string", description: "Freelancer Name"})
    readonly name: string;
    @ApiProperty({type: "array", items: {type: "number"}, description: "Freelancer offer IDs"})
    readonly offers: number[];

    @ApiProperty({type: "string" ,description:"Username"})
    readonly username: string;
    @ApiProperty({type: "string" ,description:"Password"})
    readonly password: string;
}
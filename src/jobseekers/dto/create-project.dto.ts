import { ApiProperty } from "@nestjs/swagger";

export default class CreateProjectDto {
    @ApiProperty({type: "string", description: "Project Title"})
    readonly title: string;
    @ApiProperty({type: "number", description: "Employer ID"})
    readonly employerID: number;
    @ApiProperty({type: "array", items: {type: "number"}, description: "Offer IDs"})
    readonly offerIDs: number[];
}
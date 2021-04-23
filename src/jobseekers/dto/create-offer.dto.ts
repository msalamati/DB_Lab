import { ApiProperty } from "@nestjs/swagger";

export default class CreateOfferDto {
    @ApiProperty({type: "number", description: "Offer Price"})
    readonly price: number;
    @ApiProperty({type: "boolean", description: "Offer Status"})
    readonly status: number;
    @ApiProperty({type: "number", description: "Freelancer ID"})
    readonly freelancerID: number;
    @ApiProperty({type: "number", description: "Project ID"})
    readonly projectId: number;
}
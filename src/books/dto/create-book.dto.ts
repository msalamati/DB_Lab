import { ApiProperty } from "@nestjs/swagger";

export default class CreateBookDto {
    @ApiProperty({type: "string", description: "Book Name"})
    readonly name: string;
    @ApiProperty({type: "number", description: "User ID"})
    readonly userID: number;
    @ApiProperty({type: "array", items: {type: "number"}, description: "Genre IDs"})
    readonly genreIDs: number[];
}
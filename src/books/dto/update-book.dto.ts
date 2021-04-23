import { ApiProperty } from '@nestjs/swagger';

export default class UpdateBookDto {
    @ApiProperty({ type: "number", description: "Book ID" })
    readonly id: number;
    @ApiProperty({ type: "string", description: "Book Name" })
    readonly name: string;
    @ApiProperty({ type: "number", description: "User ID" })
    readonly userID: number;
    @ApiProperty({ type: "array", items: { type: "number" }, description: "Book Genres" })
    readonly genreIDs: number[];
}

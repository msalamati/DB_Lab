import { ApiProperty } from "@nestjs/swagger";

export default class CreateGenreDto {
    @ApiProperty({type: "string", description: "Genre Name"})
    readonly type: string;
}
import { Body, Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger/dist';
import BookEntity from 'src/db/entity/book.entity';
import CreateBookDto from './dto/create-book.dto';
import { BooksService } from './books.service';
import UpdateBookDto from './dto/update-book.dto';

@Controller('book')
export default class BooksController {
    constructor(private readonly bookService: BooksService) { }

    @ApiBearerAuth()
    @ApiResponse({
        status: 201,
        description: 'Add Book'
    })
    @Post('post')
    postGenre(@Body() book: CreateBookDto) {
        return this.bookService.insert(book);
    }

    @ApiBearerAuth()
    @ApiResponse({
        status: 200,
        description: 'Get Books'
    })
    @Get()
    getAll() {
        return this.bookService.getAllBooks();
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "Delete Book" })
    @ApiQuery({
        name: 'bookID',
        required: true,
        type: Number,
        description: `id of book being deleted`
    })
    @Delete('delete')
    deleteBook(@Query('bookID') bookID) {
        return this.bookService.delete(bookID);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "Update Book" })
    @Put('update')
    updateBook(@Body() book: UpdateBookDto) {
        return this.bookService.update(book);
    }
}

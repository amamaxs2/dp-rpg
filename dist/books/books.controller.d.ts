/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/book.schema").Book> & import("./schemas/book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/book.schema").Book> & import("./schemas/book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/book.schema").Book> & import("./schemas/book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/book.schema").Book, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/book.schema").Book> & import("./schemas/book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/book.schema").Book> & import("./schemas/book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/book.schema").Book, "findOne", {}>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/book.schema").Book> & import("./schemas/book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("./schemas/book.schema").Book> & import("./schemas/book.schema").Book & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/book.schema").Book, "findOneAndDelete", {}>;
}

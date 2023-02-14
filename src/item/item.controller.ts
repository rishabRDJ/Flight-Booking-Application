import { Controller, Get, Post } from "@nestjs/common";
import { Request } from 'express';

@Controller('items')
export class ItemsController {

    @Get()
    create(): string {
        return 'Item created'
    }

}
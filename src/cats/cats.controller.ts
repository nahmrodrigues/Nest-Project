import {
  Body,
  Controller,
  // Delete,
  Get,
  // HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  // Req,
  Res,
  // UseFilters,
  // UseGuards,
  // UsePipes,
  // Put,
  // Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
// import { UpdateCatDto } from './dto/update-cat.dto';
// import { ListAllEntities } from './dto/list-all-entities.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { Roles } from 'src/decorators/roles.decorator';
// import { Request } from 'express';
// import { HttpExceptionFilter } from 'src/filters/http-exception.filter';
// import { JoiValidationPipe } from 'src/pipes/validation.pipe';
// import { ValidationPipe } from 'src/pipes/validation.pipe';
// import { RolesGuard } from 'src/guards/role.guard';

@Controller('cats')
// @UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  /* 
    Há a possibilidade de usar a classe ao invés de uma nova instância.
    Isso delega a responsabilidade de instanciação para o framework e
    habilita a injeção de dependência.
    Dessa forma, há uma redução no uso de memória.
  */
  // @UseFilters(/*new HttpExceptionFilter()*/ HttpExceptionFilter)
  // @UsePipes(new JoiValidationPipe(createCatSchema))
  @Roles('admin')
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // 'passthrough: true' allows the usage of Nest features.
  // We don't have to use .send() method to send response, for example.
  // So, we can use Express Response and Nest will still handle the response.
  // @Get()
  // findAll(@Res({ passthrough: true }) res: Response) {
  //   res.status(HttpStatus.OK);
  //   return [];
  // }

  @Get()
  async findAll(@Res({ passthrough: true }) res: Response): Promise<any> {
    // console.log(req.body);
    return res.locals;
    // return this.catsService.findAll();
  }

  @Get(':id')
  findOne(
    // we can pass an instance of built-in pipe to customize its behavior
    // @Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })),
    @Param('id', ParseIntPipe) id: number,
  ) {
    return `This action returns a #${id} cat`;
  }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
  //   return `This action updates a #${id} cat`;
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `This action removes a #${id} cat`;
  // }
}

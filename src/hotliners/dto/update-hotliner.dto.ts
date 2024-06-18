import { PartialType } from '@nestjs/mapped-types';
import { CreateHotlinerDto } from './create-hotliner.dto';

export class UpdateHotlinerDto extends PartialType(CreateHotlinerDto) {}

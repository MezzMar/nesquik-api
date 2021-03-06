import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator'
import { Category } from 'nesquik-types'

export class PostCategoryDto implements Partial<Category> {
  @ValidateIf((item) => !item.parent)
  @IsNotEmpty()
  @IsString()
  marketID = ''

  @IsOptional()
  @IsNumber()
  order: number

  @IsString()
  @IsOptional()
  banner: string

  @IsOptional()
  @IsString()
  shape: string

  @IsNotEmpty()
  @IsString()
  categoryID: string

  @ValidateIf((item) => !item.marketID)
  @IsNotEmpty()
  @IsString()
  parent: string

  @IsNotEmpty()
  @IsString()
  image: string

  @IsNotEmpty()
  @IsString()
  name: string
}

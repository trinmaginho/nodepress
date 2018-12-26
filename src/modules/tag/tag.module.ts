/**
 * Tag module.
 * @file 标签模块
 * @module modules/tag/module
 * @author Surmon <https://github.com/surmon-china>
 */

import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { Tag } from './tag.model';

@Module({
  imports: [TypegooseModule.forFeature(Tag)],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService],
})
export class TagModule {}

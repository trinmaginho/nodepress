/**
 * @file Expansion module
 * @module module/expansion/module
 * @author Surmon <https://github.com/surmon-china>
 */

import { Module } from '@nestjs/common'
import { TagProvider } from '@app/modules/tag/tag.model'
import { ArticleProvider } from '@app/modules/article/article.model'
import { CommentProvider } from '@app/modules/comment/comment.model'
import { ExpansionController } from './expansion.controller'
import { StatisticService } from './expansion.service.statistic'
import { DBBackupService } from './expansion.service.dbbackup'

const services = [StatisticService, DBBackupService]

@Module({
  controllers: [ExpansionController],
  providers: [TagProvider, ArticleProvider, CommentProvider, ...services],
  exports: services,
})
export class ExpansionModule {}

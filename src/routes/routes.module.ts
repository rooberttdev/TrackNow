import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { MapsModule } from 'src/maps/maps.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RoutesDriverService } from './routes-driver/routes-driver.service';
import { RoutesDriverGateway } from './routes-driver/routes-driver.gateway';

@Module({
  imports: [MapsModule, PrismaModule],
  controllers: [RoutesController],
  providers: [RoutesService, RoutesDriverService, RoutesDriverGateway],
})
export class RoutesModule {}

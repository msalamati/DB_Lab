import { Module } from '@nestjs/common';
import { ProjectService, EmployerService, FreelancerService, OfferService } from './jobseekers.service';
import {ProjectController, EmployerController, FreelancerController, OffersController } from './jobseekers.controller';

@Module({
  providers: [EmployerService, FreelancerService, ProjectService, OfferService],
  controllers: [EmployerController, FreelancerController, ProjectController, OffersController]
})
export class JobseekersModule {}

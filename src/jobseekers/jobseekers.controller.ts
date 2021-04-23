import { Body, Controller, Delete, Get, Post, Put, Query, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiQuery, ApiResponse } from '@nestjs/swagger/dist';
import ProjectEntity from 'src/db/entity/project.entity';
import CreateProjectDto from './dto/create-project.dto';
import { ProjectService, EmployerService, FreelancerService, OfferService } from './jobseekers.service';
import UpdateProjectDto from './dto/update-project.dto';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import CreateOfferDto from './dto/create-offer.dto';

@Controller('projects')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @ApiBearerAuth()
    @ApiResponse({
        status: 201,
        description: 'Add Project'
    })
    @Post('post')
    postGenre(@Body() project: CreateProjectDto) {
        return this.projectService.insert(project);
    }

    @ApiBearerAuth()
    @ApiResponse({
        status: 200,
        description: 'Get Projects'
    })
    @Get()
    getAll() {
        return this.projectService.getAllProjects();
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "Delete Project" })
    @ApiQuery({
        name: 'projectID',
        required: true,
        type: Number,
        description: `id of project being deleted`
    })
    @Delete('delete')
    deleteProject(@Query('projectID') projectID) {
        return this.projectService.delete(projectID);
    }

    @ApiBearerAuth()
    @ApiResponse({ status: 200, description: "Update Project" })
    @Put('update')
    updateProject(@Body() project: UpdateProjectDto) {
        return this.projectService.update(project);
    }
}

@Controller('employers')
export class EmployerController {
    constructor(private readonly employerServices: EmployerService) { }

    @Post('post')
    postEmployer(@Body() employer: CreateEmployerDto) {
        return this.employerServices.insert(employer);
    }

    @Get()
    getAll() {
        return this.employerServices.getAllEmployers();
    }

    @Get('projects')
    getBooks(@Body('employerID', ParseIntPipe) employerID: number) {
        return this.employerServices.getProjectsOfUser(employerID);
    }
}


@Controller('freelancers')
export class FreelancerController {
    constructor(private readonly freelancerServices: FreelancerService) { }

    @Post('post')
    postFreelancer(@Body() freelancer: CreateFreelancerDto) {
        return this.freelancerServices.insert(freelancer);
    }

    @Get()
    getAll() {
        return this.freelancerServices.getAllFreelancers();
    }

    @Get('offers')
    getBooks(@Body('employerID', ParseIntPipe) employerID: number) {
        return this.freelancerServices.getOffersOfUser(employerID);
    }
}


@Controller('offers')
export class OffersController {
    constructor(private readonly offerService: OfferService) { }

    @ApiResponse({
        status: 201,
        description: 'Add Offer'
    })
    @Post('post')
    postGenre(@Body() offer: CreateOfferDto) {
        return this.offerService.insert(offer);
    }

    @ApiResponse({
        status: 200,
        description: 'Get Offers'
    })
    @Get()
    getAll() {
        return this.offerService.getAllOffers();
    }

    @ApiResponse({ status: 200, description: "Delete Offer" })
    @ApiQuery({
        name: 'offerID',
        required: true,
        type: Number,
        description: `id of offer being deleted`
    })
    @Delete('delete')
    deleteProject(@Query('offerID') offerId) {
        return this.offerService.delete(offerId);
    }
}

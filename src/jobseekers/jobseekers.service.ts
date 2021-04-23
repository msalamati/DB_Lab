import ProjectEntity from '../db/entity/project.entity';
import CreateProjectDto from './dto/create-project.dto';
import EmployerEntity from '../db/entity/employer.entity';
import { createQueryBuilder, getConnection } from 'typeorm';
import CreateEmployerDto from './dto/create-employer.dto';
import CreateFreelancerDto from './dto/create-freelancer.dto';
import UpdateProjectDto from './dto/update-project.dto';
import OfferEntity from 'src/db/entity/offer.entity';
import FreelancerEntity from 'src/db/entity/freelancer.entity';
import CreateOfferDto from './dto/create-offer.dto';


export class EmployerService {
    async insert(employerDetails: CreateEmployerDto): Promise<EmployerEntity> {
        const employerEntity: EmployerEntity = EmployerEntity.create();
        const { name, projects, username, password } = employerDetails;
        employerEntity.name = name;
        employerEntity.username = username;
        employerEntity.password = password;
        await EmployerEntity.save(employerEntity);
        return employerEntity;
    }

    async getAllEmployers(): Promise<EmployerEntity[]> {
        return await EmployerEntity.find();
    }

    async findOne(username: string): Promise<EmployerEntity | undefined> {
        return await EmployerEntity.findOne({ where: { username: username }});
    }

    async getProjectsOfUser(employerID: number): Promise<ProjectEntity[]> {
        console.log(typeof (employerID));
        const employer: EmployerEntity = await EmployerEntity.findOne({ where: { id: employerID }, relations: ['projects'] });
        return employer.projects;
    }
    
}

export class FreelancerService {
    async insert(freelancerDetails: CreateFreelancerDto): Promise<FreelancerEntity> {
        const freelancerEntity: FreelancerEntity = FreelancerEntity.create();
        const { name, offers, username, password } = freelancerDetails;
        freelancerEntity.name = name;
        freelancerEntity.username = username;
        freelancerEntity.password = password;
        await FreelancerEntity.save(freelancerEntity);
        return freelancerEntity;
    }

    async getAllFreelancers(): Promise<FreelancerEntity[]> {
        return await FreelancerEntity.find();
    }

    async findOne(username: string): Promise<FreelancerEntity | undefined> {
        return await FreelancerEntity.findOne({ where: { username: username }});
    }

    async getOffersOfUser(freelancerID: number): Promise<OfferEntity[]> {
        console.log(typeof (freelancerID));
        const freelancer: FreelancerEntity = await FreelancerEntity.findOne({ where: { id: freelancerID }, relations: ['offers'] });
        return freelancer.offers;
    }
    
}

export class ProjectService {

    async insert(projectDetails: CreateProjectDto): Promise<ProjectEntity> {
        const { title, employerID, offerIDs } = projectDetails;
        const project = new ProjectEntity();
        project.title = title;
        project.employer = await EmployerEntity.findOne(employerID);
        project.offers = [];
        for (let i = 0; i < offerIDs.length; i++) {
            const genre = await OfferEntity.findOne(offerIDs[i]);
            project.offers.push(genre);
        }
        await project.save();
        return project;
    }

    async getAllProjects(): Promise<ProjectEntity[]> {
        return ProjectEntity.find();
    }

    async delete(projectID: number): Promise<ProjectEntity> {
        const project = await ProjectEntity.findOne(projectID);
        await project.remove();
        return project;
    }

    async update(projectDetails: UpdateProjectDto): Promise<ProjectEntity> {
        const { id, title, employerID, offerIDs } = projectDetails;
        const project = await ProjectEntity.findOne(id);
        if (project != undefined) {
            project.title = title;
            project.employer = await EmployerEntity.findOne(employerID);
            project.offers = [];
            offerIDs.forEach(async offerID => {
                const offer = await OfferEntity.findOne(offerID);
                project.offers.push(offer);
            });
            await project.save();
        }
        return project;
    }

}

export class OfferService {

    async insert(offerDetails: CreateOfferDto): Promise<OfferEntity> {
        const { price, freelancerID, projectId } = offerDetails;
        const offer = new OfferEntity();
        offer.price = price;
        offer.freelancer = await FreelancerEntity.findOne(freelancerID);
        offer.project = await ProjectEntity.findOne(projectId);
        await offer.save();
        return offer;
    }

    async getAllOffers(): Promise<OfferEntity[]> {
        return OfferEntity.find();
    }

    async delete(offerID: number): Promise<OfferEntity> {
        const offer = await OfferEntity.findOne(offerID);
        await offer.remove();
        return offer;
    }
}


import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import FreelancerEntity from './freelancer.entity';
import ProjectEntity from './project.entity';

@Entity()
export default class OfferEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    price: number;

    status: boolean;

    // n:1 relation with employer
    @ManyToOne(type => FreelancerEntity, freelancer => freelancer.offers)
    freelancer: FreelancerEntity;

    // n:1 relation with project
    @ManyToOne(type => ProjectEntity, project => project.offers)
    project: ProjectEntity;
}

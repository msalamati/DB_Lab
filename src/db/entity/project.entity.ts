import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, OneToMany, JoinTable } from 'typeorm';
import EmployerEntity from './employer.entity';
import OfferEntity from './offer.entity';

@Entity()
export default class ProjectEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    // n:1 relation with employer
    @ManyToOne(type => EmployerEntity, employer => employer.projects)
    employer: EmployerEntity;

    // 1:n relation with offer Entity
    @OneToMany(type => OfferEntity, offer => offer.project)
    offers: OfferEntity[];
}

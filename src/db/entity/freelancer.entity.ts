import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, JoinColumn, OneToOne } from 'typeorm';
import OfferEntity from './offer.entity';
import ResumeEntity from './resume.entity'

@Entity()
export default class FreelancerEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column({ length: 500 })
    username: string;

    @Column({ length: 500 })
    password: string;

    // 1:n relation with offer Entity
    @OneToMany(type => OfferEntity, offer => offer.project)
    offers: OfferEntity[];

    // 1:1 relation with resume
    @OneToOne(() => ResumeEntity)
    @JoinColumn()
    resume: ResumeEntity;
}

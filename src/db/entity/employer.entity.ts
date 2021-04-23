import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import ProjectEntity from './project.entity';

@Entity()
export default class EmployerEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    @Column({ length: 500 })
    username: string;

    @Column({ length: 500 })
    password: string;

    // 1:n relation with project Entity
    @OneToMany(type => ProjectEntity, project => project.employer)
    projects: ProjectEntity[];
}

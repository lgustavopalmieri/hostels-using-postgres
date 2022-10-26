import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Hostel } from './hostel.entity';

@Entity({ name: 'hostel_address' })
export class HostelAdress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['Point'],
    enumName: 'type',
    default: 'Point',
  })
  type: string;

  @Index({ spatial: true })
  @Column({
    type: 'varchar',
    nullable: true,
  })
  coordinates: number[];

  @Column({
    type: 'varchar',
    nullable: true,
  })
  formattedAddress: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  city: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  state: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  zipcode: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  country: string;

  @OneToOne(() => Hostel)
  @JoinColumn()
  hostel: Hostel;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ nullable: false })
  updatedAt: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt: Date;
}

//hussainwali.medium.com/insert-spatial-data-into-postgres-postgis-using-typeorm-in-nestjs-nodejs-2e03ab7ff0d
//https://stackoverflow.com/questions/67435650/storing-geojson-points-and-finding-points-within-a-given-distance-radius-nodej

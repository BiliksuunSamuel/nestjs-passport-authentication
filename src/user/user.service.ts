import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInput } from './dto/user.input';
import User from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async addUser(info: UserInput): Promise<User> {
    const user = this.userRepository.create(info);
    return this.userRepository.save(user);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return this.userRepository.findOneBy({ username });
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }
}

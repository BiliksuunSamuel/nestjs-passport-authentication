import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInput } from './dto/user.input';
import User from './user.entity';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((returns) => User)
  async addUser(@Args('info') info: UserInput): Promise<User> {
    return await this.userService.addUser(info);
  }

  @Query((returns) => User)
  async getUserByUserName(
    @Args('username') username: string,
  ): Promise<User | null> {
    return await this.userService.getUserByUsername(username);
  }

  @Query((returns) => User)
  async getUserById(@Args('id') id: number): Promise<User | null> {
    return await this.userService.getUserById(id);
  }

  @Query((returns) => [User])
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }
}

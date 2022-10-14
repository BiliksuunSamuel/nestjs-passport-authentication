import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  readonly username: string;
  @Field()
  readonly name: string;
  @Field()
  readonly phone: string;
  @Field()
  readonly password: string;
}

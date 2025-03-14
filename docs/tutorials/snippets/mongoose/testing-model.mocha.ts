import {Model, MongooseModel, ObjectID, PostHook, PreHook, Unique} from "@tsed/mongoose";
import {Property, Required} from "@tsed/platform-http";
import {PlatformTest} from "@tsed/platform-http/testing";
import {TestMongooseContext} from "@tsed/testing-mongoose";
import {expect} from "chai";

@Model({schemaOptions: {timestamps: true}})
@PreHook("save", (user: UserModel, next: any) => {
  user.pre = "hello pre";

  next();
})
@PostHook("save", (user: UserModel, next: any) => {
  user.post = "hello post";

  next();
})
export class UserModel {
  @ObjectID("id")
  _id: string;

  @Property()
  @Required()
  @Unique()
  email: string;

  @Property()
  pre: string;

  @Property()
  post: string;
}

describe("UserModel", () => {
  beforeEach(TestMongooseContext.create);
  afterEach(TestMongooseContext.reset);

  it("should run pre and post hook", async () => {
    const userModel = PlatformTest.get<MongooseModel<UserModel>>(UserModel);

    // GIVEN
    const user = new userModel({
      email: "test@test.fr"
    });

    // WHEN
    await user.save();

    // THEN
    expect(user.pre).to.equal("hello pre");
    expect(user.post).to.equal("hello post");
  });
});

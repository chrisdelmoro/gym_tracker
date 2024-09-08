import { Injectable } from "@nestjs/common";
import { AuthPayloadDto } from "./dto/auth.dto";
import { JwtService } from "@nestjs/jwt";

const users = [
  {
    id: 1,
    username: "john",
    password: "john123",
  },
  {
    id: 2,
    username: "chris",
    password: "chris123",
  },
];

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validadeUser(authPayload: AuthPayloadDto) {
    const findUser = users.find((user) => {
      if (user.username === authPayload.username) {
        return user;
      }
    });

    if (!findUser) return null;

    if (findUser.password === authPayload.password) {
      const { password, ...result } = findUser;
      return this.jwtService.sign(result);
    }
  }
}

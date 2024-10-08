// import { Injectable } from "@nestjs/common";
// import { ConfigService } from "@nestjs/config";
// import { PassportStrategy } from "@nestjs/passport";
// import { Strategy, ExtractJwt } from "passport-jwt";

// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private configService: ConfigService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: configService.get<string>("JWT_SECRET"),
//     });
//   }

//   validate(payload: any) {
//     return payload;
//   }
// }

import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "abc123",
    });
  }

  validate(payload: any) {
    return payload;
  }
}

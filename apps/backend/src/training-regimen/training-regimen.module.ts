import { Module } from "@nestjs/common";
import { TrainingRegimenController } from "./training-regimen.controller";
import { TrainingRegimenService } from "./training-regimen.service";

@Module({
  controllers: [TrainingRegimenController],
  providers: [TrainingRegimenService],
})
export class TrainingRegimenModule {}

import { Body, Controller, Get, Patch, Post, UseGuards } from "@nestjs/common";
import { TrainingRegimenService } from "./training-regimen.service";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";
import { TrainingRegimenDTO } from "./dto/training-regimen.dto";

@Controller("training")
export class TrainingRegimenController {
  constructor(private trainingRegimenService: TrainingRegimenService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  listAll() {
    return this.trainingRegimenService.listAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  addRegimen(@Body() trainingRegimenDTO: TrainingRegimenDTO) {
    this.trainingRegimenService.addRegimen(trainingRegimenDTO);
  }

  @Patch()
  @UseGuards(JwtAuthGuard)
  updateRegimen(@Body() trainingRegimenDTO: TrainingRegimenDTO) {
    this.trainingRegimenService.updateRegimen(trainingRegimenDTO);
  }
}

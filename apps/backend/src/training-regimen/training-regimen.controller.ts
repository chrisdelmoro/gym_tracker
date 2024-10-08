import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
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

  // TODO: Passar regime de treino por url quando existir o banco.
  @Patch()
  @UseGuards(JwtAuthGuard)
  updateRegimen(@Body() trainingRegimenDTO: TrainingRegimenDTO) {
    this.trainingRegimenService.updateRegimen(trainingRegimenDTO);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard)
  deleteRegimen(@Body() trainingRegimenDTO: TrainingRegimenDTO) {
    this.trainingRegimenService.deleteRegimen(trainingRegimenDTO);
  }
}

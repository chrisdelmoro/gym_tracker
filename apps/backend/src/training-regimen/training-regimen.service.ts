import { Injectable } from "@nestjs/common";
import { TrainingRegimenDTO } from "./dto/training-regimen.dto";

@Injectable()
export class TrainingRegimenService {
  private readonly trainingRegimens: any = {
    Peito: {},
    Costas: {},
    Pernas: {},
    Braços: {},
  };

  listAll() {
    return this.trainingRegimens;
  }

  addRegimen(trainingRegimenDTO: TrainingRegimenDTO) {
    this.trainingRegimens[trainingRegimenDTO.regimen] = {};
  }
}

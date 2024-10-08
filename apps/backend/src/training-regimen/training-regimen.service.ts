import { Injectable, NotFoundException } from "@nestjs/common";
import { TrainingRegimenDTO } from "./dto/training-regimen.dto";

@Injectable()
export class TrainingRegimenService {
  private readonly trainingRegimens: TrainingRegimenDTO[] = [
    {
      regimen: "Peito",
      exercises: [
        {
          name: "Supino reto com barra",
          sets: 4,
          reps: 12,
          load: 20,
        },
        {
          name: "Fly na máquina",
          sets: 4,
          reps: 12,
          load: 6,
        },
      ],
    },
    {
      regimen: "Costas",
      exercises: [
        {
          name: "Remada baixa com triângulo",
          sets: 4,
          reps: 12,
          load: 35,
        },
        {
          name: "Pull down",
          sets: 4,
          reps: 12,
          load: 50,
        },
      ],
    },
  ];

  listAll() {
    return this.trainingRegimens;
  }

  addRegimen(trainingRegimenDTO: TrainingRegimenDTO) {
    this.trainingRegimens.push(trainingRegimenDTO);
  }

  updateRegimen(trainingRegimenDTO: TrainingRegimenDTO) {
    const entry = this.trainingRegimens.findIndex(
      (regimen) => regimen.regimen === trainingRegimenDTO.regimen,
    );

    if (entry === -1) {
      throw new NotFoundException(
        `Regimen ${trainingRegimenDTO.regimen} does not exist!`,
      );
    }

    this.trainingRegimens.splice(entry, 1, trainingRegimenDTO);
  }

  deleteRegimen(trainingRegimenDTO: TrainingRegimenDTO) {
    const entry = this.trainingRegimens.findIndex(
      (regimen) => regimen.regimen === trainingRegimenDTO.regimen,
    );

    if (entry === -1) {
      throw new NotFoundException(
        `Regimen ${trainingRegimenDTO.regimen} does not exist!`,
      );
    }

    this.trainingRegimens.splice(entry, 1);
  }
}

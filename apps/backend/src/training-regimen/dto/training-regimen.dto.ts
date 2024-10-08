export class TrainingRegimenDTO {
  regimen: string;
  exercises: {
    name: string;
    sets: number;
    reps: number;
    load: number;
  }[];
}

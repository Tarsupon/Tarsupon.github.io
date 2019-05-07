export class Log {
  public projectName: string;
  public time: number;
  public comment: string;

  constructor(projectName: string, time: number, comment: string){
    this.projectName = projectName;
    this.time = time;
    this.comment = comment;
  }
}

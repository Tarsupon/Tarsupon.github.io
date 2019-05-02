export class TableColumn {
  public id: number;
  public name: string;
  public priority: number;

  constructor (id: number, name: string, priority: number) {
    this.id = id;
    this.name = name;
    this.priority = priority;
  }
}

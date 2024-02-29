export class Task{
  id: number;
  name: string;
  priority?: Priority;
}
export enum Priority{
  high,
  medium,
  low
}
export type Task = 
{
  id: string,
  title: string,
  state: string,
  updatedAt?: Date
}
export type TasksState = { tasks: Array<Task> }

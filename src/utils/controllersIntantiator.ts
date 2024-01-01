import tasksController from "../tasks/controller";
import { TasksService } from "../tasks/service";

export const controllers = [tasksController(new TasksService())];
import tasksController from "../controllers/tasks.controller";
import { TasksService } from "../services/tasks.service";

export const controllers = [tasksController(new TasksService())];
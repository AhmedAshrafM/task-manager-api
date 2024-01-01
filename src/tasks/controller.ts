import { Elysia } from "elysia";
import { TasksService } from "./service";
export default function tasksController(tasksService: TasksService) {
  return (app: Elysia) => {
    app.get("/tasks", async ({ set }) => {
      try {
        const tasks = await tasksService.getAllTasks();
        set.status = 200;
        return {
          message: "Tasks found !",
          ...tasks,
        };
      } catch (e) {
        set.status = 500;
        return {
          error: {
            message: "Server Error",
            e
          },
        };
      }
    },
    {
      detail: {
        tags: ['Tasks']
      }
    }
    );
    app.post("/tasks", async ({ set, body }) => {
      try {
        const task = await tasksService.createTask(body);
        set.status = 201;

        return {
          message: "Task created",
          task,
        };
      } catch (e) {
        set.status = 500;
        return {
          error: {
            message: "Server Error",
            e
          },
        };
      }  
    },
    {
      detail: {
        tags: ['Tasks']
      }
    }
    );
    app.put("tasks/:id", async ({ set, params: { id }, body }) => {
      try {
        const task = await tasksService.updateTask(id, body);

        if (!task) {
          set.status = 404;
          return {
            error: {
              message: "Task not found",
            },
          };
        }

        set.status = 200;
        return {
          message: "Task updated !",
          task,
        };
      } catch (error) {
        set.status = 500;
        return {
          error: {
            message: "Server error",
          },
        };
      }
    },
    {
      detail: {
        tags: ['Tasks']
      }
    }
    );
    app.delete("tasks/:id", async ({ set, params: { id } }) => {
      try {
        const task = await tasksService.deleteTask(id);

        if (!task) {
          set.status = 404;
          return {
            error: {
              message: "Task not found",
            },
          };
        }

        set.status = 204;
        return {};
      } catch (error) {
        set.status = 500;
        console.log(error);

        return {
          error: {
            message: "Server error",
          },
        };
      }
    },
    {
      detail: {
        tags: ['Tasks']
      }
    }
    );
    app.get("tasks/:id", async ({ set, params: { id } }) => {
      try {
        const task = await tasksService.getTask(id);

        if (!task) {
          set.status = 404;
          return {
            error: {
              message: "Task not found",
            },
          };
        }

        set.status = 200;
        return {
          message: "Task found!",
          task,
        };
      } catch (error) {
        set.status = 500;
        return {
          error: {
            message: "Server error",
          },
        };
      }
    },
    {
      detail: {
        tags: ['Tasks']
      }
    }
    );
  };
}

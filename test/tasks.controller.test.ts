
import app from "../src/index"
const baseUrl = `${app.elysia.server?.hostname}:${app.elysia.server?.port}/tasks/`;

describe("Update a Task", () => {
    it("should update a task", async () => {
        //This is a task id from my database
      const taskId = "65935783d65851dab21a1fc9";
  
      const task = {
        title: "Updated Task",
        description: "This is an updated task",
        dueDate: "2024-01-01",
        status: "Completed",
      }
  
      const request = new Request(`${baseUrl}${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
      
      const response = await app.elysia.fetch(request);
      const data: any = await response.json();
  
      expect(response.status).toEqual(200);
      expect(data).toHaveProperty("task");
  
    })
  
    it("should return a 404 error if the task is not found", async () => {
        //This is a non existent task id
      const taskId = "6234d9c35c214bee666a9e57";
  
      const task = {
        title: "Updated Task",
        description: "This is an updated task",
        dueDate: "2024-01-01",
        status: "Completed",
      }
  
      const request = new Request(`${baseUrl}${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });
  
      const response = await app.elysia.fetch(request);
  
      expect(response.status).toEqual(404);
    })
  })

import { Status } from "./tasks.status.enum";

export function isValidStatus(status: any): status is Status {
    return Object.values(Status).includes(status);
}

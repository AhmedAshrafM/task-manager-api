# Task Manager API with Bun and Elysia

This project is a backend API for a Task Manager application using [Bun](https://bun.sh/) as the runtime environment and [Elysia](https://elysiajs.com/) as the server framework. The API supports creating, viewing, editing, and deleting tasks and includes basic state management and JWT authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Configuration](#configuration)
- [Authentication](#authentication)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AhmedAshrafM/task-manager-api.git
   ```

2. Navigate to the project folder:

   ```bash
   cd task-manager-api
   ```

3. Install dependencies:

   ```bash
   bun i
   ```

4. Set up your environment variables:

   Create a `.env` file in the root of the project and add the following:

   ```dotenv
   PORT=XXXX
   MONGODB_URI=mongodb+srv://XXXX:XXXX@XXXX.XXXX.mongodb.net/
   ```

   Adjust the values accordingly.

## Usage

Start the server:

```bash
bun run dev
```

The API will be available at `http://localhost:3000`.

## API Endpoints

- **`POST /tasks`**: Create a new task.
- **`GET /tasks`**: Retrieve all tasks.
- **`GET /tasks/:id`**: Retrieve a specific task.
- **`PUT /tasks/:id`**: Update a task.
- **`DELETE /tasks/:id`**: Delete a task.

## Configuration

- `PORT`: The port on which the server will run.
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for JWT token generation.

## Authentication

This API uses JWT authentication. To access protected routes, include the generated JWT token in the request headers:

```bash
Authorization: Bearer your_token_here
```

## Testing

Run tests using Jest:

```bash
bun run test
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
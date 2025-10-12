import swaggerJsDoc from "swagger-jsdoc";
import { SwaggerDefinition } from "swagger-jsdoc";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Daily Expense Tracker API",
    version: "1.0.0",
    description: "API documentation for Daily Expense Tracker application",
    contact: {
      name: "API Support",
      email: "support@expense-tracker.com",
    },
  },
  servers: [
    {
      url: "http://localhost:4000/api/v1",
      description: "Development server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        description: "Enter your JWT token",
      },
    },
    schemas: {
      User: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "User ID",
          },
          email: {
            type: "string",
            description: "User email",
          },
          username: {
            type: "string",
            description: "Username",
          },
          password: {
            type: "string",
            description: "User password (hashed)",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Account creation date",
          },
        },
      },
      Category: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "Category ID",
          },
          name: {
            type: "string",
            description: "Category name",
          },
          icon: {
            type: "string",
            description: "Category icon",
          },
          userId: {
            type: "string",
            description: "User ID who owns this category",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Category creation date",
          },
        },
      },
      Expense: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "Expense ID",
          },
          amount: {
            type: "number",
            description: "Expense amount",
          },
          description: {
            type: "string",
            description: "Expense description",
          },
          category: {
            type: "string",
            description: "Category ID",
          },
          userId: {
            type: "string",
            description: "User ID who owns this expense",
          },
          date: {
            type: "string",
            format: "date-time",
            description: "Expense date",
          },
          createdAt: {
            type: "string",
            format: "date-time",
            description: "Record creation date",
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
            description: "Error message",
          },
          status: {
            type: "number",
            description: "HTTP status code",
          },
        },
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
};

const options = {
  definition: swaggerDefinition,
  apis: [
    "./src/modules/users/routes/*.ts",
    "./src/modules/category/routes/*.ts",
    "./src/modules/expense/routes/*.ts",
    "./src/modules/stats/routes/*.ts",
  ],
};

const swaggerSpec = swaggerJsDoc(options);

export default swaggerSpec;

import SwaggerJSDoc from "swagger-jsdoc";

export const swaggerSpec = SwaggerJSDoc({
  definition: {
    info: {
      title: "Shop Api",
      version: "1.0.0",
    },
    basePath: "localhost:4000",
  },
  apis: ["src/routes/**/*.ts"],
});

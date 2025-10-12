import swaggerJsDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Daily Expense Tracker API",
    version: "1.0.0",
    description: "API documentation for Daily Expense Tracker application",
  },
  servers: [
    {
      url: "http://localhost:4000/api/v1",
      description: "Development server",
    },
  ],
};

const options = {
  definition: swaggerDefinition,
  apis: [
    "./src/modules/users/routes/*.ts",
    "./src/modules/category/routes/*.ts",
    "./src/modules/expense/routes/*.ts",
  ],
};

console.log("🔍 Testing Swagger configuration...");
console.log("📁 Scanning paths:", options.apis);

try {
  const swaggerSpec: any = swaggerJsDoc(options);
  console.log("\n✅ Swagger spec generated successfully!");
  console.log("\n📊 Available paths:");
  console.log(JSON.stringify(swaggerSpec.paths, null, 2));

  const pathCount = Object.keys(swaggerSpec.paths || {}).length;
  console.log(`\n🎯 Total endpoints found: ${pathCount}`);

  if (pathCount === 0) {
    console.log("\n⚠️  WARNING: No endpoints found!");
    console.log("Possible reasons:");
    console.log("  1. JSDoc comments are not properly formatted");
    console.log("  2. File paths don't match the patterns");
    console.log("  3. @swagger tag is missing");
  }
} catch (error) {
  console.error("\n❌ Error generating Swagger spec:");
  console.error(error);
}

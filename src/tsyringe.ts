// src/container.ts
import { container } from "tsyringe";
import { PrismaClient } from "@prisma/client";
import IDepartment from "./Domain/Repositories/Idepartment";
import DepartmentImplementation from "./Infrastructure/departmentImplementation";
import CustomerService from "./Application/Services/service";

// Instantiate PrismaClient
const prisma = new PrismaClient();

// Register PrismaClient instance
container.registerInstance(PrismaClient, prisma);

// Register DepartmentImplementation as the implementation of IDepartment
container.register<IDepartment>("IDepartment", {
  useFactory: () => new DepartmentImplementation(prisma),
});

// Register CustomerService with the resolved DepartmentImplementation
container.register<CustomerService>(CustomerService, {
  useFactory: () => new CustomerService(container.resolve<IDepartment>("IDepartment")),
});

export default container;

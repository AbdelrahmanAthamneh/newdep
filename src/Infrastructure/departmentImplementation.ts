import { PrismaClient } from "@prisma/client";
import IDepartment from "../Domain/Repositories/Idepartment";
import CustomerEntity from "../Domain/Entities/entity";

export default class DepartmentImplementation implements IDepartment {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createCustomer(data: CustomerEntity): Promise<CustomerEntity> {
    try {
      const newCustomer = await this.prisma.customer.create({
        data: {
          firstName: data.firstName,
          lastName: data.lastName,
          Department: {
            connect: {
              id: 1,
            },
          },
        },
      });

      return newCustomer as CustomerEntity;
    } catch (error) {
      console.error("Error creating customer:", error);
      throw new Error("An error occurred while creating the customer");
    }
  }
}

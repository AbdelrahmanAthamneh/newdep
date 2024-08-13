// src/Application/service.ts
import IDepartment from "../../Domain/Repositories/Idepartment";
import { CustomerDTO } from "../DTOs/dto";

export default class CustomerService {
  private departmentService: IDepartment;

  constructor(departmentService: IDepartment) {
    this.departmentService = departmentService;
  }

  async createCustomer(data: CustomerDTO) {
    try {
      const newCustomer = await this.departmentService.createCustomer(data);
      return newCustomer;
    } catch (error) {
      console.error("Error creating customer:", error);
      throw new Error("An error occurred while creating the customer");
    }
  }
}

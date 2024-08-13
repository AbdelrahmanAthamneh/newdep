// src/Presentation/controller.ts
import { Request, Response } from "express";
import container from "../tsyringe";
import CustomerService from "../Application/Services/service";

export default async function controller(req: Request, res: Response) {
  // Resolve CustomerService from the container
  const customerService = container.resolve<CustomerService>(CustomerService);

  // Execute the service with the incoming request data
  const customerData = req.body;
  const newCustomer = await customerService.createCustomer(customerData);

  res.json(newCustomer);
}

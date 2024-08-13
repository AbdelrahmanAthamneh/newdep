import CustomerEntity from "../Entities/entity";

export default interface IDepartment {
  createCustomer(data: CustomerEntity): Promise<CustomerEntity>;
}

import { Category } from "@prisma/client";

export class Item<T> {
  id?: T;
  name: string;
  amount: number;
  category: Category;

  constructor(id: T, name: string, amount: number, category: Category){
    this.id = id;
    this.name = name;
    this.amount = amount;
    this.category = category;
  }
}
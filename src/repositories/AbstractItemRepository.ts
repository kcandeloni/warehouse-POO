import { Item } from "../model/Item";

export abstract class AbstractItemRepositpry<T> {
  abstract create({id, name, amount, category}: Item<T>): void;
  abstract getAll(): Promise<Item<T>[]>;
}
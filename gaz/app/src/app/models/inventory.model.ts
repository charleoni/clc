
export class InventoryModel {
  list: ListDetail[];
  image: string;
  observations: string;
}

export interface ListDetail {
  product: string,
  quantity: number,
  check: number
}

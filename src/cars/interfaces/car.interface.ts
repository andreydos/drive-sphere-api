export interface Car {
  readonly id: string;
  make: string;
  model: string;
  createdByUser: string;
  generation?: string;
  modification?: string;
}

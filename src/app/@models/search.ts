export interface ISearch {
  _id?: string;
  query: string;
  zip: number;
  ip?: string;
  searchedAt?: Date;
}

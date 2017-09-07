import { ISearch } from './search';

export class Search implements ISearch {
  public _id?: string;
  public query: string;
  public zip: number;
  public ip?: string;
  public searchedAt?: Date;

  private meta?: any;

  constructor(search: ISearch, meta?: any) {
    Object.assign(this, search);
    this.meta = meta || null;
  }

  public getMeta?() {
    return this.meta;
  }

}

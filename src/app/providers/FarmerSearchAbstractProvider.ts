import { Farmer } from '../model/Farmer';

export declare abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}

export declare class SearchParams {
    nameOrDoc: string
}
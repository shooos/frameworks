import {User, Sort} from '../../Types';

export interface Users {
  readonly list: User[];
  readonly sort: Sort;
}

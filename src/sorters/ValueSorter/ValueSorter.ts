import SorterBase from '../SorterBase';
import { ValueCompareOptions, ValueSorterConfig } from './types';

/**
 * 値の比較
 */
export default class ValueSorter extends SorterBase<any, ValueCompareOptions, ValueSorterConfig> {
  protected _compare(value1: any, value2: any, config: ValueSorterConfig): number {
    return value1 === value2 ? 0 : value1 > value2 ? 1 : -1;
  }
}

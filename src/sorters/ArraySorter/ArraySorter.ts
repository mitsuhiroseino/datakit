import { Comparator } from '../../comparators';
import ArrayComparator from '../../comparators/ArrayComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { ArrayCompareOptions, ArraySorterConfig } from './types';

/**
 * 配列のソーター
 */
export default class ArraySorter extends ComparatorSorterBase<any[], ArrayCompareOptions, ArraySorterConfig> {
  protected _createComparator(config: ComparatorSorterConfigBase): Comparator {
    return new ArrayComparator(config);
  }
}

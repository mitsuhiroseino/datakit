import { Comparator } from '../../comparators';
import NumberComparator from '../../comparators/NumberComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { NumberCompareOptions, NumberSorterConfig } from './types';

/**
 * 数値のソーター
 */
export default class NumberSorter extends ComparatorSorterBase<number, NumberCompareOptions, NumberSorterConfig> {
  protected _createComparator(config: ComparatorSorterConfigBase): Comparator {
    return new NumberComparator(config);
  }
}

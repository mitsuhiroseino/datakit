import { Comparator } from '../../comparators';
import BooleanComparator from '../../comparators/BooleanComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { BooleanCompareOptions, BooleanSorterConfig } from './types';

/**
 * 真偽値のソーター
 */
export default class BooleanSorter extends ComparatorSorterBase<boolean, BooleanCompareOptions, BooleanSorterConfig> {
  protected _createComparator(config: ComparatorSorterConfigBase): Comparator {
    return new BooleanComparator(config);
  }
}

import { Comparator } from '../../comparators';
import DateComparator from '../../comparators/DateComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { DateCompareOptions, DateSorterConfig } from './types';

/**
 * 日時のソーター
 */
export default class DateSorter extends ComparatorSorterBase<Date, DateCompareOptions, DateSorterConfig> {
  protected _createComparator(config: ComparatorSorterConfigBase): Comparator {
    return new DateComparator(config);
  }
}

import { Comparator } from '../../comparators';
import StringComparator from '../../comparators/StringComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { StringCompareOptions, StringSorterConfig } from './types';

/**
 * 文字列のソーター
 */
export default class StringSorter extends ComparatorSorterBase<string, StringCompareOptions, StringSorterConfig> {
  protected _createComparator(config: ComparatorSorterConfigBase): Comparator {
    return new StringComparator(config);
  }
}

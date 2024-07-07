import { Comparator } from '../../comparators';
import LengthComparator from '../../comparators/LengthComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { LengthCompareOptions, LengthSorterConfig } from './types';

/**
 * 文字列、配列の長さ、オブジェクト要素数のソーター
 */
export default class LengthSorter extends ComparatorSorterBase<any, LengthCompareOptions, LengthSorterConfig> {
  protected _createComparator(config: ComparatorSorterConfigBase): Comparator {
    return new LengthComparator(config);
  }
}

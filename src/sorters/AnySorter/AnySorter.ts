import { Comparator } from '../../comparators';
import AnyComparator from '../../comparators/AnyComparator';
import ComparatorSorterBase, { ComparatorSorterConfigBase } from '../ComparatorSorterBase';
import { AnyCompareOptions, AnySorterConfig } from './types';

/**
 * 任意のソーター
 */
export default class AnySorter extends ComparatorSorterBase<any, AnyCompareOptions, AnySorterConfig> {
  protected _createComparator(config: ComparatorSorterConfigBase): Comparator {
    return new AnyComparator(config);
  }
}

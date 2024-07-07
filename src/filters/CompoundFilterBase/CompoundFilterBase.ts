import { Creator } from '@visue/factory/easy';
import FilterBase from '../FilterBase';
import { Filter } from '../types';
import { CompoundFilterConfigBase, CompoundMatchOptionsBase } from './types';

export default abstract class CompoundFilterBase<
  O extends CompoundMatchOptionsBase = CompoundMatchOptionsBase,
  C extends CompoundFilterConfigBase = CompoundFilterConfigBase,
> extends FilterBase<any, O, C> {
  /**
   * 比較用のコンディション
   */
  protected _items: Filter[];

  constructor(config?: C) {
    super(config);
    this._items = Creator.from('filter', this.config.items);
  }
}

import { Creator } from '@visue/factory/easy';
import MatcherBase from '../MatcherBase';
import { Matcher } from '../types';
import { CompoundMatchOptionsBase, CompoundMatcherConfigBase } from './types';

export default abstract class CompoundMatcherBase<
  O extends CompoundMatchOptionsBase = CompoundMatchOptionsBase,
  C extends CompoundMatcherConfigBase = CompoundMatcherConfigBase,
> extends MatcherBase<any, O, C> {
  /**
   * matcher
   */
  protected _items!: Matcher[];

  constructor(config?: C) {
    super(config);
    const { items = [] } = this.config;
    this._items = Creator.from('matcher', items);
  }
}

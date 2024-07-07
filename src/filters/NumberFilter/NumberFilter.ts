import { Matcher } from '../../matchers';
import NumberMatcher from '../../matchers/NumberMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { NumberFilterConfig, NumberMatchOptions } from './types';

/**
 * 数値のフィルター
 */
export default class NumberFilter extends MatcherFilterBase<
  number,
  NumberMatchOptions<number>,
  NumberFilterConfig<number>
> {
  protected _createMatcher(config: MatcherFilterConfigBase): Matcher {
    return new NumberMatcher(config);
  }
}

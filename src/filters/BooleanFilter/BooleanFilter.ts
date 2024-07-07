import { Matcher } from '../../matchers';
import BooleanMatcher from '../../matchers/BooleanMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { BooleanFilterConfig, BooleanMatchOptions } from './types';

/**
 * 真偽値のフィルター
 */
export default class BooleanFilter extends MatcherFilterBase<
  boolean,
  BooleanMatchOptions<boolean>,
  BooleanFilterConfig<boolean>
> {
  protected _createMatcher(config: MatcherFilterConfigBase): Matcher {
    return new BooleanMatcher(config);
  }
}

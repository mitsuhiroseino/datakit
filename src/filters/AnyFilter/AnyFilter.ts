import { Matcher } from '../../matchers';
import AnyMatcher from '../../matchers/AnyMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { AnyFilterConfig, AnyMatchOptions } from './types';

/**
 * 任意のフィルター
 */
export default class AnyFilter<V = unknown> extends MatcherFilterBase<V, AnyMatchOptions<V>, AnyFilterConfig<V>> {
  protected _createMatcher(config: MatcherFilterConfigBase): Matcher {
    return new AnyMatcher(config);
  }
}

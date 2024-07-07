import { Matcher } from '../../matchers';
import ArrayMatcher from '../../matchers/ArrayMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { ArrayFilterConfig, ArrayMatchOptions } from './types';

/**
 * 配列のフィルター
 */
export default class ArrayFilter extends MatcherFilterBase<any[], ArrayMatchOptions<any[]>, ArrayFilterConfig<any[]>> {
  protected _createMatcher(config: MatcherFilterConfigBase): Matcher {
    return new ArrayMatcher(config);
  }
}

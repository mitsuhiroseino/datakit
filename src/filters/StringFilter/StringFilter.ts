import { Matcher } from '../../matchers';
import StringMatcher from '../../matchers/StringMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { StringFilterConfig, StringMatchOptions } from './types';

/**
 * 文字列のフィルター
 */
export default class StringFilter extends MatcherFilterBase<
  string,
  StringMatchOptions<string>,
  StringFilterConfig<string>
> {
  protected _createMatcher(config: MatcherFilterConfigBase): Matcher {
    return new StringMatcher(config);
  }
}

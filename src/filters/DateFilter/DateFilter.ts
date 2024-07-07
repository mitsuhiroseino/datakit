import { Matcher } from '../../matchers';
import DateMatcher from '../../matchers/DateMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { DateFilterConfig, DateMatchOptions } from './types';

/**
 * 日時のフィルター
 */
export default class DateFilter extends MatcherFilterBase<Date, DateMatchOptions<Date>, DateFilterConfig<Date>> {
  protected _createMatcher(config: MatcherFilterConfigBase): Matcher {
    return new DateMatcher(config);
  }
}

import isString from 'lodash/isString';
import { Matcher } from '../../matchers';
import RegexMatcher from '../../matchers/RegexMatcher';
import MatcherFilterBase, { MatcherFilterConfigBase } from '../MatcherFilterBase';
import { RegexFilterConfig, RegexMatchOptions } from './types';

/**
 * 正規表現のフィルター
 */
export default class RegexFilter extends MatcherFilterBase<RegExp | string, RegexMatchOptions, RegexFilterConfig> {
  /**
   * 正規表現
   */
  protected _regex: RegExp;

  constructor(config?: RegexFilterConfig) {
    super(config);
    const value = this.config.value;
    if (isString(value)) {
      this._regex = new RegExp(value, this.config.flags);
    } else {
      this._regex = value;
    }
  }

  protected _createMatcher(config: MatcherFilterConfigBase): Matcher {
    return new RegexMatcher(config);
  }

  protected _match(value: string, config: RegexFilterConfig): boolean {
    return super._match(value, { ...config, value: this._regex });
  }
}

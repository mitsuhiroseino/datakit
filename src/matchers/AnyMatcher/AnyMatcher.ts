import MatcherBase from '../MatcherBase';
import { AnyMatchOptions, AnyMatcherConfig } from './types';

/**
 * 任意の比較
 */
class AnyMatcher extends MatcherBase<any, AnyMatchOptions, AnyMatcherConfig> {
  protected _match(value1: any, value2: any, config: AnyMatcherConfig): boolean {
    return config.match ? config.match(value1, value2, config) : false;
  }
}
export default AnyMatcher;

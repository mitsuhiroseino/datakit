import match from '@visue/utils/boolean/match';
import MatcherBase from '../MatcherBase';
import { BooleanMatchOptions, BooleanMatcherConfig } from './types';

/**
 * 文字列の比較
 */
class BooleanMatcher extends MatcherBase<boolean, BooleanMatchOptions, BooleanMatcherConfig> {
  protected _match(value1: boolean, value2: boolean, config: BooleanMatcherConfig): boolean {
    return match(value1, value2, config);
  }
}
export default BooleanMatcher;

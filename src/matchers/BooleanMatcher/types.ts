import { MatchOptions } from '@visue/utils/boolean/match';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type BooleanMatchOptions = MatchOptionsBase & MatchOptions;

/**
 * コンフィグ
 */
export type BooleanMatcherConfig = MatcherConfigBase & BooleanMatchOptions;

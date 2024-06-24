import { MatchOptions } from '@visue/utils/array/match';
import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';

/**
 * matchメソッドのオプション
 */
export type ArrayMatchOptions = MatchOptionsBase & MatchOptions;

/**
 * コンフィグ
 */
export type ArrayMatcherConfig = MatcherConfigBase & ArrayMatchOptions;

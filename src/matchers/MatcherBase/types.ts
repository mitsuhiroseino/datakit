import { ConfigurableConfigBase } from '@visue/core/base/ConfigurableBase';
import { MatchOptions, MatcherConfig } from '../types';

/**
 * matchメソッドのオプション
 */
export type MatchOptionsBase = MatchOptions;

/**
 * コンフィグ
 */
export type MatcherConfigBase = ConfigurableConfigBase & MatcherConfig & MatchOptionsBase;

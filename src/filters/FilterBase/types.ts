import { ConfigurableConfigBase } from '@visue/core/base/ConfigurableBase';
import { FilterConfig, MatchOptions } from '../types';

/**
 * matchメソッドのオプション
 */
export type MatchOptionsBase = MatchOptions;

/**
 * コンフィグ
 */
export type FilterConfigBase = ConfigurableConfigBase & FilterConfig & MatchOptionsBase;

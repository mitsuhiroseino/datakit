import { ConfigurableConfigBase } from '@visue/core/ConfigurableBase';
import { ComparatorConfig, CompareOptions } from '../types';

/**
 * compareメソッドのオプション
 */
export type CompareOptionsBase = CompareOptions;

/**
 * コンフィグ
 */
export type ComparatorConfigBase = ConfigurableConfigBase & ComparatorConfig & CompareOptionsBase;

import { ConfigurableConfigBase } from '@visue/core/ConfigurableBase';
import { CompareOptions, SorterConfig } from '../types';

/**
 * compareメソッドのオプション
 */
export type CompareOptionsBase = CompareOptions;

/**
 * コンフィグ
 */
export type SorterConfigBase = ConfigurableConfigBase & SorterConfig & CompareOptionsBase;

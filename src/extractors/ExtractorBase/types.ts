import { ConfigurableConfigBase } from '@visue/core/ConfigurableBase';
import { ExtractOptions, ExtractorConfig } from '../types';

/**
 * extractメソッドのオプション
 */
export type ExtractOptionsBase = ExtractOptions;

/**
 * コンフィグ
 */
export type ExtractorConfigBase = ConfigurableConfigBase & ExtractorConfig & ExtractOptionsBase;

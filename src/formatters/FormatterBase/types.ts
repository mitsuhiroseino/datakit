import { ConfigurableConfigBase } from '@visue/core/ConfigurableBase';
import { FormatOptions, FormatterConfig } from '../types';

/**
 * formatメソッドのオプション
 */
export type FormatOptionsBase = FormatOptions;

/**
 * コンフィグ
 */
export type FormatterConfigBase = ConfigurableConfigBase & FormatterConfig & FormatOptionsBase;

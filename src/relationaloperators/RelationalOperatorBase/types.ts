import { ConfigurableConfigBase } from '@visue/core/ConfigurableBase';
import { EvaluateOptions, RelationalOperatorConfig } from '../types';

/**
 * evaluateメソッドのオプション
 */
export type EvaluateOptionsBase<V = any> = EvaluateOptions<V>;

/**
 * コンフィグ
 */
export type RelationalOperatorConfigBase<V = any> = ConfigurableConfigBase & RelationalOperatorConfig<V>;

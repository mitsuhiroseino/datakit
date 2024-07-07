import { ConfigBase } from '@visue/core/base/Base';
import { EvaluateOptions, RelationalOperatorConfig } from '../types';

/**
 * evaluateメソッドのオプション
 */
export type EvaluateOptionsBase<V = any> = EvaluateOptions<V>;

/**
 * コンフィグ
 */
export type RelationalOperatorConfigBase<V = any> = ConfigBase & RelationalOperatorConfig<V>;

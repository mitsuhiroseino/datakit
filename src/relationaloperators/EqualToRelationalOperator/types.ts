import { EvaluateOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * evaluateメソッドのオプション
 */
export type EqualToEvaluateOptions<V = any> = EvaluateOptionsBase<V>;

/**
 * コンフィグ
 */
export type EqualToRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> & EqualToEvaluateOptions<V>;

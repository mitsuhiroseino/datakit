import { EvaluateOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * evaluateメソッドのオプション
 */
export type GreaterThanOrEqualToEvaluateOptions<V = any> = EvaluateOptionsBase<V>;

/**
 * コンフィグ
 */
export type GreaterThanOrEqualToRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> &
  GreaterThanOrEqualToEvaluateOptions<V>;

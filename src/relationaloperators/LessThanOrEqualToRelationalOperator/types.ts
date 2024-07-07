import { EvaluateOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * evaluateメソッドのオプション
 */
export type LessThanOrEqualToEvaluateOptions<V = any> = EvaluateOptionsBase<V>;

/**
 * コンフィグ
 */
export type LessThanOrEqualToRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> &
  LessThanOrEqualToEvaluateOptions<V>;

import { EvaluateOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * evaluateメソッドのオプション
 */
export type NotEqualToEvaluateOptions<V = any> = EvaluateOptionsBase<V>;

/**
 * コンフィグ
 */
export type NotEqualToRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> &
  NotEqualToEvaluateOptions<V>;

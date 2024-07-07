import { EvaluateOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * evaluateメソッドのオプション
 */
export type GreaterThanEvaluateOptions<V = any> = EvaluateOptionsBase<V>;

/**
 * コンフィグ
 */
export type GreaterThanRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> &
  GreaterThanEvaluateOptions<V>;

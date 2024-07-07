import { EvaluateOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * evaluateメソッドのオプション
 */
export type LessThanEvaluateOptions<V = any> = EvaluateOptionsBase<V>;

/**
 * コンフィグ
 */
export type LessThanRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> & LessThanEvaluateOptions<V>;

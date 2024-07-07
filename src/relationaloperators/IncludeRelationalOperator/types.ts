import { EvaluateOptionsBase, RelationalOperatorConfigBase } from '../RelationalOperatorBase';

/**
 * evaluateメソッドのオプション
 */
export type IncludeEvaluateOptions<V = any> = EvaluateOptionsBase<V>;

/**
 * コンフィグ
 */
export type IncludeRelationalOperatorConfig<V = any> = RelationalOperatorConfigBase<V> & IncludeEvaluateOptions<V>;

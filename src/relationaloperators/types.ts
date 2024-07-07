import { Identifiable, IdentifiableConfig } from '@visue/utils';

/**
 * evaluateメソッドのオプション
 */
export type EvaluateOptions<V = any> = IdentifiableConfig & {
  /**
   * 条件となる値
   */
  value: V;
};

/**
 * コンフィグ
 */
export type RelationalOperatorConfig<V = any> = IdentifiableConfig & {
  /**
   * 条件となる値
   */
  value: V;
};

/**
 * データを読み込む
 */
export interface RelationalOperator<V = any, O extends EvaluateOptions<V> = EvaluateOptions<V>> extends Identifiable {
  /**
   * 条件に一致するか検証する
   * @param target 検証対象の値
   */
  evaluate(target: V, options: O): boolean;
}

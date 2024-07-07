import { Identifiable, IdentifiableConfig } from '@visue/utils';
import { ToValidValueOptions } from '@visue/utils/lang/toValidValue';

/**
 * parseメソッドのオプション
 */
export type ParseOptions<V = any> = ToValidValueOptions<V>;

/**
 * コンフィグ
 */
export type ParserConfig = IdentifiableConfig & ParseOptions;

/**
 * パーサー
 */
export interface Parser<R = any, O extends ParseOptions = ParseOptions> extends Identifiable {
  /**
   * Parserのインスタンスであるか
   */
  readonly isParser: true;

  /**
   * 値をパースする
   * @param value 値
   * @param options オプション
   */
  parse(value: any, options?: O): R;
}

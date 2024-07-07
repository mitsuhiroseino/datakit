import { Identifiable, IdentifiableConfig } from '@visue/utils';
import { ToValidValueOptions } from '@visue/utils/lang/toValidValue';

/**
 * formatメソッドのオプション
 */
export type FormatOptions = ToValidValueOptions<string>;

/**
 * コンフィグ
 */
export type FormatterConfig = IdentifiableConfig & FormatOptions;

/**
 * フォーマッター
 * 任意の型の値を文字列形式で表示する為の形式に変換する
 */
export interface Formatter<V = any, O extends FormatOptions = FormatOptions> extends Identifiable {
  /**
   * Formatterのインスタンスであるか
   */
  readonly isFormatter: true;

  /**
   * 値をフォーマットする
   * @param value 値
   * @param options オプション
   */
  format(value: V, options?: O): string;
}

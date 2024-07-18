import { Destructible } from '@visue/core/DestructibleBase';
import { Identifiable, IdentifiableConfig } from '@visue/utils';
import { ExtractorConfig } from '../extractors';
import { ObjectExtractOptions } from '../extractors/ObjectExtractor';

/**
 * matchメソッドのオプション
 */
export type MatchOptions = {};

/**
 * コンフィグ
 */
export type FilterConfig = IdentifiableConfig &
  MatchOptions &
  Pick<ObjectExtractOptions, 'path'> & {
    /**
     * フィルタ対象を変換する際に指定する
     */
    extractor?: ExtractorConfig;
  };

/**
 * インターフェイス
 */
export interface Filter<O extends MatchOptions = MatchOptions> extends Identifiable, Destructible {
  /**
   * Filterのインスタンスであるか
   */
  readonly isFilter: true;

  /**
   * 条件に合うか
   * @param value
   * @param options
   */
  match(value: any, options?: O): boolean;
}

import { IDestructible } from '@visue/core/base/DestructibleBase';
import { FactoryableConfig, IFactoryable } from '@visue/core/factory/Factory';
import { ExtractorConfig } from '../extractors';
import { ObjectExtractOptions } from '../extractors/ObjectExtractor';

/**
 * matchメソッドのオプション
 */
export type MatchOptions = {};

/**
 * コンフィグ
 */
export type FilterConfig = FactoryableConfig &
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
export interface IFilter<O extends MatchOptions = MatchOptions> extends IFactoryable, IDestructible {
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

import { IDestructible } from '@visue/core/base/DestructibleBase';
import { Identifiable, IdentifiableConfig } from '@visue/utils';
import { ExtractorConfig } from '../extractors';
import { ObjectExtractOptions } from '../extractors/ObjectExtractor';

/**
 * compareメソッドのオプション
 */
export type CompareOptions = {
  /**
   * 降順
   */
  desc?: boolean;
};

/**
 * コンフィグ
 */
export type SorterConfig = IdentifiableConfig &
  Pick<ObjectExtractOptions, 'path'> &
  CompareOptions & {
    /**
     * ソート対象を抽出する際に指定する
     */
    extractor?: ExtractorConfig;
  };

/**
 * ソーターのインターフェイス
 */
export interface Sorter<O extends CompareOptions = CompareOptions> extends Identifiable, IDestructible {
  /**
   * Sorterのインスタンスであるか
   */
  readonly isSorter: true;

  /**
   * ソート用の比較
   * @param value1 対象1
   * @param value2 対象2
   * @param options オプション
   * @returns 結果
   */
  compare(value1: unknown, value2: unknown, options?: O): number;
}

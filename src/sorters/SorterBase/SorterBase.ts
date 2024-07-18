import DestructibleBase from '@visue/core/DestructibleBase';
import assignIdentifier from '@visue/utils/identifier/assignIdentifier';
import ExtractorFactory from '../../extractors/ExtractorFactory';
import ObjectExtractor from '../../extractors/ObjectExtractor';
import { Sorter } from '../types';
import { CompareOptionsBase, SorterConfigBase } from './types';

/**
 * ソーターの基底クラス
 */
export default abstract class SorterBase<
    V = any,
    O extends CompareOptionsBase = CompareOptionsBase,
    C extends SorterConfigBase = SorterConfigBase,
  >
  extends DestructibleBase<C>
  implements Sorter<O>
{
  readonly isSorter = true;

  /**
   * ID
   */
  readonly $id!: string;

  /**
   * 識別名
   */
  readonly $idName?: string;

  /**
   * 値抽出器
   */
  protected _extractor?: ObjectExtractor;

  constructor(config?: C) {
    super(config);
    assignIdentifier(this, this.config);
    const { extractor, path } = this.config;
    if (extractor) {
      this._extractor = ExtractorFactory.get(extractor);
    } else if (path != null) {
      this._extractor = new ObjectExtractor({ path });
    }
  }

  /**
   * ソート
   * @param value1 対象1
   * @param value2 対象2
   * @param options オプション
   * @returns 結果
   */
  compare(value1: any, value2: any, options?: O): number {
    const me = this,
      config = me._withConfig(options);

    let val1, val2;
    if (me._extractor) {
      val1 = me._extractor.extract(value1);
      val2 = me._extractor.extract(value2);
    } else {
      val1 = value1;
      val2 = value2;
    }

    const result = me._compare(val1, val2, config);
    return config.desc ? result * -1 : result;
  }

  /**
   * ソートの為の比較
   * @param value1 対象1
   * @param value2 対象2
   * @param config コンフィグ
   * @returns 結果
   */
  protected abstract _compare(value1: V, value2: V, config: C): number;
}

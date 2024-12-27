/**
 * 種別
 */
const EXTRACTOR_TYPES = {
  /**
   * 任意の値からの抽出器
   */
  ANY: 'any',

  /**
   * 日付形式の値からの抽出器
   */
  DATE: 'date',

  /**
   * オブジェクト形式の値からの抽出器
   */
  OBJECT: 'object',
} as const;
export default EXTRACTOR_TYPES;

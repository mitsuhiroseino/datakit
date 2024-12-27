/**
 * 種別
 */
const SORTER_TYPES = {
  /**
   * 任意のソーター
   */
  ANY: 'any',

  /**
   * 配列のソーター
   */
  ARRAY: 'array',

  /**
   * 真偽値のソーター
   */
  BOOLEAN: 'boolean',

  /**
   * 日時のソーター
   */
  DATE: 'date',

  /**
   * 文字列、配列の長さ、オブジェクトの要素数のソーター
   */
  LENGTH: 'length',

  /**
   * リスト順に並べるソーター
   */
  LIST: 'list',

  /**
   * 数値のソーター
   */
  NUMBER: 'number',

  /**
   * 文字列のソーター
   */
  STRING: 'string',

  /**
   * 値のソーター
   */
  VALUE: 'value',
} as const;
export default SORTER_TYPES;

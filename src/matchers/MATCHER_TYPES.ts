/**
 * 種別
 */
const MATCHER_TYPES = {
  /**
   * 子要素の全てがtrueの場合にtrueを返すマッチャー
   */
  AND: 'and',

  /**
   * 任意のマッチャー
   */
  ANY: 'any',

  /**
   * 配列のマッチャー
   */
  ARRAY: 'array',

  /**
   * 真偽値のマッチャー
   */
  BOOLEAN: 'boolean',

  /**
   * 日時のマッチャー
   */
  DATE: 'date',

  /**
   * 文字列、配列の長さ、オブジェクトの要素数のマッチャー
   */
  LENGTH: 'length',

  /**
   * リストに含まれる場合にtrueを返すマッチャー
   */
  LIST: 'list',

  /**
   * 数値のマッチャー
   */
  NUMBER: 'number',

  /**
   * 子要素の何れかがtrueの場合にtrueを返すマッチャー
   */
  OR: 'or',

  /**
   * 正規表現のマッチャー
   */
  REGEX: 'regex',

  /**
   * 文字列のマッチャー
   */
  STRING: 'string',
} as const;
export default MATCHER_TYPES;

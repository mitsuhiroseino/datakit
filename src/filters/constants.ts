/**
 * 種別
 */
export const FILTER_TYPES = {
  /**
   * 子要素の全てがtrueの場合にtrueを返すフィルター
   */
  AND: 'and',

  /**
   * 任意のフィルター
   */
  ANY: 'any',

  /**
   * 配列のフィルター
   */
  ARRAY: 'array',

  /**
   * 真偽値のフィルター
   */
  BOOLEAN: 'boolean',

  /**
   * 日時のフィルター
   */
  DATE: 'date',

  /**
   * 文字列、配列の長さ、オブジェクトの要素数のフィルター
   */
  LENGTH: 'length',

  /**
   * 数値のフィルター
   */
  NUMBER: 'number',

  /**
   * 子要素の何れかがtrueの場合にtrueを返すフィルター
   */
  OR: 'or',

  /**
   * 正規表現のフィルター
   */
  REGEX: 'regex',

  /**
   * 文字列のフィルター
   */
  STRING: 'string',
};

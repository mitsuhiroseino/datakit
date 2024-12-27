/**
 * 種別
 */
const RELATIONAL_OPERATOR_TYPES = {
  /**
   * ===
   */
  EQ: 'eq',

  /**
   * >=
   */
  GE: 'ge',

  /**
   * >
   */
  GT: 'gt',

  /**
   * 文字列に含まれる
   */
  INCLUDE: 'include',

  /**
   * <=
   */
  LE: 'le',

  /**
   * <
   */
  LT: 'lt',

  /**
   * !==
   */
  NE: 'ne',
} as const;
export default RELATIONAL_OPERATOR_TYPES;

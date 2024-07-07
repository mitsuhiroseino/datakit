import { FilterConfigBase, MatchOptionsBase } from '../FilterBase';
import { Filter, FilterConfig } from '../types';

/**
 * matchメソッドのオプション
 */
export type CompoundMatchOptionsBase = MatchOptionsBase;

/**
 * コンフィグ
 */
export type CompoundFilterConfigBase = FilterConfigBase &
  CompoundMatchOptionsBase & {
    /**
     * filterの配列
     */
    items: string | FilterConfig | Filter | (string | FilterConfig | Filter)[];
  };

import { MatchOptionsBase, MatcherConfigBase } from '../MatcherBase';
import { Matcher } from '../types';

export type CompoundMatchOptionsBase = MatchOptionsBase;

/**
 * コンフィグ
 */
export type CompoundMatcherConfigBase = MatcherConfigBase &
  CompoundMatchOptionsBase & {
    /**
     * matcherの配列
     */
    items: string | MatcherConfigBase | Matcher | (string | MatcherConfigBase | Matcher)[];
  };

import EasyFactory from '@visue/factory/easy/EasyFactory';
import AndMatcher from './AndMatcher';
import AnyMatcher from './AnyMatcher';
import ArrayMatcher from './ArrayMatcher';
import BooleanMatcher from './BooleanMatcher';
import DateMatcher from './DateMatcher';
import LengthMatcher from './LengthMatcher';
import ListMatcher from './ListMatcher';
import MATCHER_TYPES from './MATCHER_TYPES';
import NumberMatcher from './NumberMatcher';
import OrMatcher from './OrMatcher';
import RegexMatcher from './RegexMatcher';
import StringMatcher from './StringMatcher';
import { Matcher } from './types';

const MatcherFactory = new EasyFactory<Matcher>({
  category: 'matcher',
  products: [
    { type: MATCHER_TYPES.AND, Class: AndMatcher },
    { type: MATCHER_TYPES.ANY, Class: AnyMatcher },
    { type: MATCHER_TYPES.ARRAY, Class: ArrayMatcher },
    { type: MATCHER_TYPES.BOOLEAN, Class: BooleanMatcher },
    { type: MATCHER_TYPES.DATE, Class: DateMatcher },
    { type: MATCHER_TYPES.LENGTH, Class: LengthMatcher },
    { type: MATCHER_TYPES.LIST, Class: ListMatcher },
    { type: MATCHER_TYPES.NUMBER, Class: NumberMatcher },
    { type: MATCHER_TYPES.OR, Class: OrMatcher },
    { type: MATCHER_TYPES.REGEX, Class: RegexMatcher },
    { type: MATCHER_TYPES.STRING, Class: StringMatcher },
  ],
});
export default MatcherFactory;

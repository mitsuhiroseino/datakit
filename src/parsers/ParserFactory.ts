import EasyFactory from '@visue/factory/easy/EasyFactory';
import AnyParser from './AnyParser';
import BooleanParser from './BooleanParser';
import DateParser from './DateParser';
import NoopParser from './NoopParser';
import NumberParser from './NumberParser';
import ObjectParser from './ObjectParser';
import StringParser from './StringParser';
import { PARSER_TYPES } from './constants';
import { Parser } from './types';

const ParserFactory = new EasyFactory<Parser>({
  category: 'parser',
  products: [
    { type: PARSER_TYPES.ANY, Class: AnyParser },
    { type: PARSER_TYPES.BOOLEAN, Class: BooleanParser },
    { type: PARSER_TYPES.DATE, Class: DateParser },
    { type: PARSER_TYPES.NOOP, Class: NoopParser },
    { type: PARSER_TYPES.NUMBER, Class: NumberParser },
    { type: PARSER_TYPES.OBJECT, Class: ObjectParser },
    { type: PARSER_TYPES.STRING, Class: StringParser },
  ],
});
export default ParserFactory;

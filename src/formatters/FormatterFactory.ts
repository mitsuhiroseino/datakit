import EasyFactory from '@visue/factory/easy/EasyFactory';
import AnyFormatter from './AnyFormatter';
import BooleanFormatter from './BooleanFormatter';
import DateFormatter from './DateFormatter';
import FORMATTER_TYPES from './FORMATTER_TYPES';
import NoopFormatter from './NoopFormatter';
import NumberFormatter from './NumberFormatter';
import ObjectFormatter from './ObjectFormatter';
import StringFormatter from './StringFormatter';
import { Formatter } from './types';

const FormatterFactory = new EasyFactory<Formatter>({
  category: 'formatter',
  products: [
    { type: FORMATTER_TYPES.ANY, Class: AnyFormatter },
    { type: FORMATTER_TYPES.BOOLEAN, Class: BooleanFormatter },
    { type: FORMATTER_TYPES.DATE, Class: DateFormatter },
    { type: FORMATTER_TYPES.NOOP, Class: NoopFormatter },
    { type: FORMATTER_TYPES.NUMBER, Class: NumberFormatter },
    { type: FORMATTER_TYPES.OBJECT, Class: ObjectFormatter },
    { type: FORMATTER_TYPES.STRING, Class: StringFormatter },
  ],
});
export default FormatterFactory;

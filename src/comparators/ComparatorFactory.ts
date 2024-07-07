import EasyFactory from '@visue/factory/easy/EasyFactory';
import AnyComparator from './AnyComparator';
import ArrayComparator from './ArrayComparator';
import BooleanComparator from './BooleanComparator';
import DateComparator from './DateComparator';
import LengthComparator from './LengthComparator';
import NumberComparator from './NumberComparator';
import OrderComparator from './OrderComparator';
import StringComparator from './StringComparator';
import { COMPALATOR_TYPES } from './constants';
import { Comparator } from './types';

const ComparatorFactory = new EasyFactory<Comparator>({
  category: 'comparator',
  products: [
    { type: COMPALATOR_TYPES.ANY, Class: AnyComparator },
    { type: COMPALATOR_TYPES.ARRAY, Class: ArrayComparator },
    { type: COMPALATOR_TYPES.BOOLEAN, Class: BooleanComparator },
    { type: COMPALATOR_TYPES.DATE, Class: DateComparator },
    { type: COMPALATOR_TYPES.LENGTH, Class: LengthComparator },
    { type: COMPALATOR_TYPES.NUMBER, Class: NumberComparator },
    { type: COMPALATOR_TYPES.ORDER, Class: OrderComparator },
    { type: COMPALATOR_TYPES.STRING, Class: StringComparator },
  ],
});
export default ComparatorFactory;

import EasyFactory from '@visue/factory/easy/EasyFactory';
import AndFilter from './AndFilter';
import AnyFilter from './AnyFilter';
import ArrayFilter from './ArrayFilter';
import BooleanFilter from './BooleanFilter';
import DateFilter from './DateFilter';
import FILTER_TYPES from './FILTER_TYPES';
import LengthFilter from './LengthFilter';
import NumberFilter from './NumberFilter';
import OrFilter from './OrFilter';
import RegexFilter from './RegexFilter';
import StringFilter from './StringFilter';
import { Filter } from './types';

const FilterFactory = new EasyFactory<Filter>({
  category: 'filter',
  products: [
    { type: FILTER_TYPES.AND, Class: AndFilter },
    { type: FILTER_TYPES.ANY, Class: AnyFilter },
    { type: FILTER_TYPES.ARRAY, Class: ArrayFilter },
    { type: FILTER_TYPES.BOOLEAN, Class: BooleanFilter },
    { type: FILTER_TYPES.DATE, Class: DateFilter },
    { type: FILTER_TYPES.LENGTH, Class: LengthFilter },
    { type: FILTER_TYPES.NUMBER, Class: NumberFilter },
    { type: FILTER_TYPES.OR, Class: OrFilter },
    { type: FILTER_TYPES.REGEX, Class: RegexFilter },
    { type: FILTER_TYPES.STRING, Class: StringFilter },
  ],
});
export default FilterFactory;

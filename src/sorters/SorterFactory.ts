import EasyFactory from '@visue/factory/easy/EasyFactory';
import AnySorter from './AnySorter';
import ArraySorter from './ArraySorter';
import BooleanSorter from './BooleanSorter';
import DateSorter from './DateSorter';
import LengthSorter from './LengthSorter';
import ListSorter from './ListSorter';
import NumberSorter from './NumberSorter';
import StringSorter from './StringSorter';
import ValueSorter from './ValueSorter';
import { SORTER_TYPES } from './constants';
import { Sorter } from './types';

const SorterFactory = new EasyFactory<Sorter>({
  category: 'sorter',
  products: [
    { type: SORTER_TYPES.ANY, Class: AnySorter },
    { type: SORTER_TYPES.ARRAY, Class: ArraySorter },
    { type: SORTER_TYPES.BOOLEAN, Class: BooleanSorter },
    { type: SORTER_TYPES.DATE, Class: DateSorter },
    { type: SORTER_TYPES.LENGTH, Class: LengthSorter },
    { type: SORTER_TYPES.LIST, Class: ListSorter },
    { type: SORTER_TYPES.NUMBER, Class: NumberSorter },
    { type: SORTER_TYPES.STRING, Class: StringSorter },
    { type: SORTER_TYPES.VALUE, Class: ValueSorter },
  ],
});
export default SorterFactory;

import EasyFactory from '@visue/factory/easy/EasyFactory';
import AnyExtractor from './AnyExtractor';
import DateExtractor from './DateExtractor';
import ObjectExtractor from './ObjectExtractor';
import { EXTRACTOR_TYPES } from './constants';
import { Extractor } from './types';

const ExtractorFactory = new EasyFactory<Extractor>({
  category: 'extractor',
  products: [
    { type: EXTRACTOR_TYPES.ANY, Class: AnyExtractor },
    { type: EXTRACTOR_TYPES.DATE, Class: DateExtractor },
    { type: EXTRACTOR_TYPES.OBJECT, Class: ObjectExtractor },
  ],
});
export default ExtractorFactory;

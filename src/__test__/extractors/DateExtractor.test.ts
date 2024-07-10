import { EXTRACTOR_TYPES, Extractor, ExtractorFactory } from 'src/extractors';
import DateExtractor, { DateExtractorConfig } from 'src/extractors/DateExtractor';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: Extractor = ExtractorFactory.create(EXTRACTOR_TYPES.DATE);
      expect(result).toBeInstanceOf(DateExtractor);
    });
  });
});

describe('DateExtractor', () => {
  describe('extract', () => {
    describe('default', () => {
      const VALUE = new Date(1999, 0, 2, 3, 40, 56, 789);

      test('文字列で取得', () => {
        const config: DateExtractorConfig = { type: EXTRACTOR_TYPES.DATE, format: 'MM' },
          extractor: DateExtractor<string> = ExtractorFactory.get(config),
          result = extractor.extract(VALUE);
        expect(result).toBe('01');
      });

      test('数値で取得', () => {
        const config: DateExtractorConfig = { type: EXTRACTOR_TYPES.DATE, format: 'MM', toNumber: true },
          extractor: DateExtractor<number> = ExtractorFactory.get(config),
          result = extractor.extract(VALUE);
        expect(result).toBe(1);
      });

      test('[Error]', () => {
        const config: DateExtractorConfig = { type: EXTRACTOR_TYPES.DATE, format: 'MM' },
          extractor: DateExtractor = ExtractorFactory.get(config),
          fn = () => extractor.extract(null as any);
        expect(fn).toThrowError('null is invalid source.');
      });
    });
  });
});

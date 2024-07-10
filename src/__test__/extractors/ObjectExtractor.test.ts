import { EXTRACTOR_TYPES, Extractor, ExtractorFactory } from 'src/extractors';
import ObjectExtractor, { ObjectExtractorConfig } from 'src/extractors/ObjectExtractor';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: Extractor = ExtractorFactory.create(EXTRACTOR_TYPES.OBJECT);
      expect(result).toBeInstanceOf(ObjectExtractor);
    });
  });
});

describe('ObjectExtractor', () => {
  describe('extract', () => {
    describe('options', () => {
      describe('path', () => {
        const VALUE = {
          item0: 'ITEM0',
          item1: {
            item1_0: 'ITEM1_0',
            item1_1: 'ITEM1_1',
          },
        };

        test('子要素', () => {
          const config: ObjectExtractorConfig = { type: EXTRACTOR_TYPES.OBJECT, path: 'item0' },
            extractor: ObjectExtractor = ExtractorFactory.get(config),
            result = extractor.extract(VALUE);
          expect(result).toBe('ITEM0');
        });

        test('孫要素(文字列で指定)', () => {
          const config: ObjectExtractorConfig = { type: EXTRACTOR_TYPES.OBJECT, path: 'item1.item1_0' },
            extractor: ObjectExtractor = ExtractorFactory.get(config),
            result = extractor.extract(VALUE);
          expect(result).toBe('ITEM1_0');
        });

        test('孫要素(配列で指定)', () => {
          const config: ObjectExtractorConfig = { type: EXTRACTOR_TYPES.OBJECT, path: ['item1', 'item1_0'] },
            extractor: ObjectExtractor = ExtractorFactory.get(config),
            result = extractor.extract(VALUE);
          expect(result).toBe('ITEM1_0');
        });
        test('[Error]', () => {
          const config: ObjectExtractorConfig = { type: EXTRACTOR_TYPES.OBJECT, path: 'item0' },
            extractor: ObjectExtractor = ExtractorFactory.get(config),
            fn = () => extractor.extract(null);
          expect(fn).toThrowError('null is invalid source.');
        });
      });
    });
  });
});

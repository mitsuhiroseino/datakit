import { FilterFactory, IFilter } from 'src/filters';
import AnyFilter, { AnyFilterConfig } from 'src/filters/AnyFilter';

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: IFilter = FilterFactory.create(AnyFilter.TYPE);
      expect(result).toBeInstanceOf(AnyFilter);
    });
  });
});

describe('AnyFilter', () => {
  describe('default', () => {
    test('常に不一致', () => {
      const config: AnyFilterConfig = { type: AnyFilter.TYPE, value: 'ABC' },
        filter: AnyFilter = FilterFactory.create(config),
        result = filter.match('ABC');
      expect(result).toBe(false);
    });
  });

  describe('options', () => {
    describe('match', () => {
      test('一致', () => {
        const config: AnyFilterConfig = {
            type: AnyFilter.TYPE,
            value: 'ABC',
            match: (value1: string, value2: string, config) => {
              return value1.startsWith(value2);
            },
          },
          filter: AnyFilter = FilterFactory.create(config),
          result = filter.match('ABCDEFGHIJ');
        expect(result).toBe(true);
      });

      test('不一致', () => {
        const config: AnyFilterConfig = {
            type: AnyFilter.TYPE,
            value: 'BCD',
            match: (value1: string, value2: string, config) => {
              return value1.startsWith(value2);
            },
          },
          filter: AnyFilter = FilterFactory.create(config),
          result = filter.match('ABCDEFGHIJ');
        expect(result).toBe(false);
      });
    });
  });
});

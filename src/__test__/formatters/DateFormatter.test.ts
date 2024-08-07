import { FORMATTER_TYPES, Formatter, FormatterFactory } from 'src/formatters';
import DateFormatter, { DateFormatterConfig } from 'src/formatters/DateFormatter';

describe('DateFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: Formatter = FormatterFactory.create(FORMATTER_TYPES.DATE);
      expect(formatter).toBeInstanceOf(DateFormatter);
    });
  });
  describe('format', () => {
    const VALUE = new Date(2000, 0, 1, 3, 4, 5, 6);
    const FORMAT = 'yyy-MM-dd HH:mm:ss.SSS';
    const JST = '2000-01-01 03:04:05.006';
    const UTC = '1999-12-31 18:04:05.006';
    test('JST', () => {
      const config: DateFormatterConfig = { type: FORMATTER_TYPES.DATE, format: FORMAT },
        formatter: DateFormatter = FormatterFactory.get(config),
        result = formatter.format(VALUE);
      expect(result).toBe(JST);
    });
    test('UTC', () => {
      const config: DateFormatterConfig = { type: FORMATTER_TYPES.DATE, format: FORMAT, utc: true },
        formatter: DateFormatter = FormatterFactory.get(config),
        result = formatter.format(VALUE);
      expect(result).toBe(UTC);
    });
  });
});

import { FORMATTER_TYPES, Formatter, FormatterFactory } from 'src/formatters';
import NumberFormatter, { NumberFormatterConfig } from 'src/formatters/NumberFormatter';

describe('NumberFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: Formatter = FormatterFactory.create(FORMATTER_TYPES.NUMBER);
      expect(formatter).toBeInstanceOf(NumberFormatter);
    });
  });
  describe('format', () => {
    test('default', () => {
      const config: NumberFormatterConfig = { type: FORMATTER_TYPES.NUMBER },
        formatter: NumberFormatter = FormatterFactory.get(config),
        result = formatter.format(12345.6789);
      expect(result).toBe('12,345.679');
    });
    test('any format', () => {
      const config: NumberFormatterConfig = { type: FORMATTER_TYPES.NUMBER, format: '##0.0' },
        formatter: NumberFormatter = FormatterFactory.get(config),
        result = formatter.format(12345.6789);
      expect(result).toBe('12345.7');
    });
  });
});

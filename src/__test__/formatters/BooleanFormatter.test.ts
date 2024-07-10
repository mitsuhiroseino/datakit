import { FORMATTER_TYPES, Formatter, FormatterFactory } from 'src/formatters';
import BooleanFormatter, { BooleanFormatterConfig } from 'src/formatters/BooleanFormatter';

describe('BooleanFormatter', () => {
  describe('Factory', () => {
    test('create', () => {
      const formatter: Formatter = FormatterFactory.create(FORMATTER_TYPES.BOOLEAN);
      expect(formatter).toBeInstanceOf(BooleanFormatter);
    });
  });
  describe('format', () => {
    test('trueString', () => {
      const config: BooleanFormatterConfig = { type: FORMATTER_TYPES.BOOLEAN, trueString: '😊', falseString: '😡' },
        formatter: BooleanFormatter = FormatterFactory.get(config),
        formattedValue = formatter.format(true);
      expect(formattedValue).toBe('😊');
    });
    test('falseString', () => {
      const config: BooleanFormatterConfig = { type: FORMATTER_TYPES.BOOLEAN, trueString: '😊', falseString: '😡' },
        formatter: BooleanFormatter = FormatterFactory.get(config),
        formattedValue = formatter.format(false);
      expect(formattedValue).toBe('😡');
    });
  });
});

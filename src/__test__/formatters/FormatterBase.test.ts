import { Formatter, FormatterFactory } from 'src/formatters';
import FormatterBase, { FormatOptionsBase, FormatterConfigBase } from 'src/formatters/FormatterBase';

const TYPE = 'test';

type TestFormatOptions = FormatOptionsBase & {
  oprionProp?: boolean;
};
type TestFormatterConfig = FormatterConfigBase &
  TestFormatOptions & {
    configProp?: boolean;
  };

class TestFormatter extends FormatterBase<any, TestFormatOptions, TestFormatterConfig> {
  protected _format(value: any, config: FormatterConfigBase): string | null {
    switch (value) {
      case '(NULL)':
        return null;
      case '(CONFIG)':
        return config as any;
      case '(ERROR)':
        throw new Error('Error!!!');
      default:
        return `${value}!`;
    }
  }
}
FormatterFactory.register(TYPE, TestFormatter);

describe('Factory', () => {
  describe('create', () => {
    test('type', () => {
      const result: Formatter = FormatterFactory.create(TYPE);
      expect(result).toBeInstanceOf(TestFormatter);
    });
  });
});

describe('TestFormatter', () => {
  describe('format', () => {
    describe('default', () => {
      test('[Success]', () => {
        const config: TestFormatterConfig = {
            type: TYPE,
          },
          formatter: TestFormatter = FormatterFactory.get(config),
          result = formatter.format('123');
        expect(result).toBe('123!');
      });

      test('[Error]', () => {
        const config: TestFormatterConfig = {
            type: TYPE,
          },
          formatter: TestFormatter = FormatterFactory.get(config),
          fn = () => formatter.format('(ERROR)');
        expect(fn).toThrow(new Error('Error!!!'));
      });

      test('[Error(return null)]', () => {
        const config: TestFormatterConfig = {
            type: TYPE,
          },
          formatter: TestFormatter = FormatterFactory.get(config),
          fn = () => formatter.format('(NULL)');
        expect(fn).toThrow(new Error('(NULL) is an invalid value to format.'));
      });

      test('config', () => {
        const config: TestFormatterConfig = {
            type: TYPE,
            configProp: true,
          },
          formatter: TestFormatter = FormatterFactory.get(config),
          result = formatter.format('(CONFIG)', { oprionProp: true });
        expect(result).toEqual({ type: TYPE, configProp: true, oprionProp: true });
      });
    });

    describe('options', () => {
      describe('undefinedValue', () => {
        test('value=undefined', () => {
          const config: TestFormatterConfig = { type: TYPE, undefinedValue: 'UNDEFINED' },
            formatter: TestFormatter = FormatterFactory.get(config),
            result = formatter.format(undefined);
          expect(result).toBe('UNDEFINED');
        });

        test('value=null', () => {
          const config: TestFormatterConfig = { type: TYPE, undefinedValue: 'UNDEFINED' },
            formatter: TestFormatter = FormatterFactory.get(config),
            result = formatter.format(null);
          expect(result).toBe('null!');
        });
      });

      describe('nullValue', () => {
        test('value=null', () => {
          const config: TestFormatterConfig = { type: TYPE, nullValue: 'NULL' },
            formatter: TestFormatter = FormatterFactory.get(config),
            result = formatter.format(null);
          expect(result).toBe('NULL');
        });

        test('value=undefined', () => {
          const config: TestFormatterConfig = { type: TYPE, nullValue: 'NULL' },
            formatter: TestFormatter = FormatterFactory.get(config),
            result = formatter.format(undefined);
          expect(result).toBe('undefined!');
        });
      });

      describe('defaultValue', () => {
        test('[Error]', () => {
          const config: TestFormatterConfig = { type: TYPE, defaultValue: 'DEFAULT' },
            formatter: TestFormatter = FormatterFactory.get(config),
            result = formatter.format('(ERROR)');
          expect(result).toBe('DEFAULT');
        });

        test('[Error(return null)]', () => {
          const config: TestFormatterConfig = { type: TYPE, defaultValue: 'DEFAULT' },
            formatter: TestFormatter = FormatterFactory.get(config),
            result = formatter.format('(NULL)');
          expect(result).toBe('DEFAULT');
        });
      });
    });
  });
});

import { PARSER_TYPES, Parser, ParserFactory } from 'src/parsers';
import NoopParser, { NoopParserConfig } from 'src/parsers/NoopParser';

describe('NoopParser', () => {
  describe('Factory', () => {
    test('create', () => {
      const parser: Parser = ParserFactory.create(PARSER_TYPES.NOOP);
      expect(parser).toBeInstanceOf(NoopParser);
    });
  });
  describe('parse', () => {
    test('default', () => {
      const config: NoopParserConfig = {
          type: PARSER_TYPES.NOOP,
        },
        parser: NoopParser = ParserFactory.get(config),
        result = parser.parse('ABC');
      expect(result).toBe('ABC');
    });
  });
});

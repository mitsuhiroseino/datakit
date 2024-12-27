import EasyFactory from '@visue/factory/easy/EasyFactory';
import EqualRelationalOperator from './EqualToRelationalOperator';
import GreaterThanOrEqualRelationalOperator from './GreaterThanOrEqualRelationalOperator';
import GreaterThanRelationalOperator from './GreaterThanRelationalOperator';
import IncludeRelationalOperator from './IncludeRelationalOperator';
import LessThanOrEqualRelationalOperator from './LessThanOrEqualToRelationalOperator';
import LessThanRelationalOperator from './LessThanRelationalOperator';
import NotEqualRelationalOperator from './NotEqualToRelationalOperator';
import RELATIONAL_OPERATOR_TYPES from './RELATIONAL_OPERATOR_TYPES';
import { RelationalOperator } from './types';

const RelationalOperatorFactory = new EasyFactory<RelationalOperator>({
  category: 'relationaloperator',
  products: [
    { type: RELATIONAL_OPERATOR_TYPES.EQ, Class: EqualRelationalOperator },
    { type: RELATIONAL_OPERATOR_TYPES.GE, Class: GreaterThanOrEqualRelationalOperator },
    { type: RELATIONAL_OPERATOR_TYPES.GT, Class: GreaterThanRelationalOperator },
    { type: RELATIONAL_OPERATOR_TYPES.INCLUDE, Class: IncludeRelationalOperator },
    { type: RELATIONAL_OPERATOR_TYPES.LE, Class: LessThanOrEqualRelationalOperator },
    { type: RELATIONAL_OPERATOR_TYPES.LT, Class: LessThanRelationalOperator },
    { type: RELATIONAL_OPERATOR_TYPES.NE, Class: NotEqualRelationalOperator },
  ],
});
export default RelationalOperatorFactory;

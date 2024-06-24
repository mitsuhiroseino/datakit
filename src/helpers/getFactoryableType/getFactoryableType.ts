import { FactoryableConstructor, IFactoryable } from '@visue/core/factory/Factory';

const getFactoryableType = (instance: IFactoryable) => (instance.constructor as FactoryableConstructor).TYPE;
export default getFactoryableType;

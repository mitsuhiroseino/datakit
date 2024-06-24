import uuid from '@visue/utils/data/uuid';

const assignId = (config: any, idKey = '$id') => (config?.[idKey] != null ? config[idKey] : uuid());
export default assignId;

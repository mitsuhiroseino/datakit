import { EventedConfig, EventedEventHandlers } from '@visue/core/base/Evented';
import { EventInfo } from '@visue/core/events/Observable';
import { IdentifiableItem } from '@visue/utils/types';
import { SelectionConfig } from '../types';
import { SelectionEventsBase } from './constants';

/**
 * イベントハンドラー
 */
export type SelectionEventHandlersBase<I extends IdentifiableItem = IdentifiableItem> = EventedEventHandlers & {
  [SelectionEventsBase.select]?: (event: EventInfo<{ items: I[] }>) => void;
  [SelectionEventsBase.unselect]?: (event: EventInfo<{ items: I[] }>) => void;
};

/**
 * コンフィグ
 */
export type SelectionConfigBase<
  I extends IdentifiableItem = IdentifiableItem,
  H extends SelectionEventHandlersBase<I> = SelectionEventHandlersBase<I>,
> = EventedConfig<H> & SelectionConfig;

import { EventedEvents } from '@visue/core/base/Evented';

/**
 * イベント
 */
export const SelectionEventsBase = {
  ...EventedEvents,
  select: 'select',
  unselect: 'unselect',
} as const;

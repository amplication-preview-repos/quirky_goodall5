import { Slot as TSlot } from "../api/slot/Slot";

export const SLOT_TITLE_FIELD = "endTime";

export const SlotTitle = (record: TSlot): string => {
  return record.endTime?.toString() || String(record.id);
};

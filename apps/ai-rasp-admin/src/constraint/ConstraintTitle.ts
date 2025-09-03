import { Constraint as TConstraint } from "../api/constraint/Constraint";

export const CONSTRAINT_TITLE_FIELD = "name";

export const ConstraintTitle = (record: TConstraint): string => {
  return record.name?.toString() || String(record.id);
};

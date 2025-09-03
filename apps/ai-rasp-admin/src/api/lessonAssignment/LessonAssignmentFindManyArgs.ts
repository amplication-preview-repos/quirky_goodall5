import { LessonAssignmentWhereInput } from "./LessonAssignmentWhereInput";
import { LessonAssignmentOrderByInput } from "./LessonAssignmentOrderByInput";

export type LessonAssignmentFindManyArgs = {
  where?: LessonAssignmentWhereInput;
  orderBy?: Array<LessonAssignmentOrderByInput>;
  skip?: number;
  take?: number;
};

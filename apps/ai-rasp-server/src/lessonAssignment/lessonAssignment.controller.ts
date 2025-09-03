import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LessonAssignmentService } from "./lessonAssignment.service";
import { LessonAssignmentControllerBase } from "./base/lessonAssignment.controller.base";

@swagger.ApiTags("lessonAssignments")
@common.Controller("lessonAssignments")
export class LessonAssignmentController extends LessonAssignmentControllerBase {
  constructor(protected readonly service: LessonAssignmentService) {
    super(service);
  }
}

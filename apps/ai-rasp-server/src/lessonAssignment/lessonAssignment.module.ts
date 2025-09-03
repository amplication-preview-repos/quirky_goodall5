import { Module } from "@nestjs/common";
import { LessonAssignmentModuleBase } from "./base/lessonAssignment.module.base";
import { LessonAssignmentService } from "./lessonAssignment.service";
import { LessonAssignmentController } from "./lessonAssignment.controller";
import { LessonAssignmentResolver } from "./lessonAssignment.resolver";

@Module({
  imports: [LessonAssignmentModuleBase],
  controllers: [LessonAssignmentController],
  providers: [LessonAssignmentService, LessonAssignmentResolver],
  exports: [LessonAssignmentService],
})
export class LessonAssignmentModule {}

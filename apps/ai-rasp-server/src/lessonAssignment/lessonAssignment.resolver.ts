import * as graphql from "@nestjs/graphql";
import { LessonAssignmentResolverBase } from "./base/lessonAssignment.resolver.base";
import { LessonAssignment } from "./base/LessonAssignment";
import { LessonAssignmentService } from "./lessonAssignment.service";

@graphql.Resolver(() => LessonAssignment)
export class LessonAssignmentResolver extends LessonAssignmentResolverBase {
  constructor(protected readonly service: LessonAssignmentService) {
    super(service);
  }
}

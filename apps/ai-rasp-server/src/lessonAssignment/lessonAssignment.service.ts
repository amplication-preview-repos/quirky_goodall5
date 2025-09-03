import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LessonAssignmentServiceBase } from "./base/lessonAssignment.service.base";

@Injectable()
export class LessonAssignmentService extends LessonAssignmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

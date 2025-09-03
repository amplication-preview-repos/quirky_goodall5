import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScheduleVersionServiceBase } from "./base/scheduleVersion.service.base";

@Injectable()
export class ScheduleVersionService extends ScheduleVersionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Module } from "@nestjs/common";
import { ScheduleVersionModuleBase } from "./base/scheduleVersion.module.base";
import { ScheduleVersionService } from "./scheduleVersion.service";
import { ScheduleVersionController } from "./scheduleVersion.controller";
import { ScheduleVersionResolver } from "./scheduleVersion.resolver";

@Module({
  imports: [ScheduleVersionModuleBase],
  controllers: [ScheduleVersionController],
  providers: [ScheduleVersionService, ScheduleVersionResolver],
  exports: [ScheduleVersionService],
})
export class ScheduleVersionModule {}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScheduleVersionService } from "./scheduleVersion.service";
import { ScheduleVersionControllerBase } from "./base/scheduleVersion.controller.base";

@swagger.ApiTags("scheduleVersions")
@common.Controller("scheduleVersions")
export class ScheduleVersionController extends ScheduleVersionControllerBase {
  constructor(protected readonly service: ScheduleVersionService) {
    super(service);
  }
}

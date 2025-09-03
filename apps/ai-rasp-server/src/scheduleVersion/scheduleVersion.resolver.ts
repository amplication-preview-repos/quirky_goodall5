import * as graphql from "@nestjs/graphql";
import { ScheduleVersionResolverBase } from "./base/scheduleVersion.resolver.base";
import { ScheduleVersion } from "./base/ScheduleVersion";
import { ScheduleVersionService } from "./scheduleVersion.service";

@graphql.Resolver(() => ScheduleVersion)
export class ScheduleVersionResolver extends ScheduleVersionResolverBase {
  constructor(protected readonly service: ScheduleVersionService) {
    super(service);
  }
}

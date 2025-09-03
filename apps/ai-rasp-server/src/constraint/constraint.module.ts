import { Module } from "@nestjs/common";
import { ConstraintModuleBase } from "./base/constraint.module.base";
import { ConstraintService } from "./constraint.service";
import { ConstraintController } from "./constraint.controller";
import { ConstraintResolver } from "./constraint.resolver";

@Module({
  imports: [ConstraintModuleBase],
  controllers: [ConstraintController],
  providers: [ConstraintService, ConstraintResolver],
  exports: [ConstraintService],
})
export class ConstraintModule {}

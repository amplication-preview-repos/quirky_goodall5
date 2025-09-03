import { Module } from "@nestjs/common";
import { RoomModule } from "./room/room.module";
import { CourseModule } from "./course/course.module";
import { GroupModule } from "./group/group.module";
import { TeacherModule } from "./teacher/teacher.module";
import { ConstraintModule } from "./constraint/constraint.module";
import { ScheduleVersionModule } from "./scheduleVersion/scheduleVersion.module";
import { LessonAssignmentModule } from "./lessonAssignment/lessonAssignment.module";
import { SlotModule } from "./slot/slot.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    RoomModule,
    CourseModule,
    GroupModule,
    TeacherModule,
    ConstraintModule,
    ScheduleVersionModule,
    LessonAssignmentModule,
    SlotModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}

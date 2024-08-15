import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthenticateGuard } from "src/guards/authenticate.guard";

export const UseUserGuard = () => applyDecorators(
    UseGuards(AuthenticateGuard)
);
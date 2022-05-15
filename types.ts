import { DefaultCtx, SessionContext, SimpleRolesIsAuthorized } from "blitz"
import { ROLE, User } from "db"

// Note: You should switch to Postgres and then use a DB enum for role type

declare module "blitz" {
  export interface Ctx extends DefaultCtx {
    session: SessionContext
  }
  export interface Session {
    isAuthorized: SimpleRolesIsAuthorized<ROLE>
    PublicData: {
      userId: User["id"]
      role: ROLE
    }
  }
}

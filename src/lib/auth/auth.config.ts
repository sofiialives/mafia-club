import { NextAuthConfig, User} from "next-auth";
import { AdapterSession, AdapterUser } from "next-auth/adapters";
import { JWT } from "next-auth/jwt";


interface ExtendedToken extends JWT {
  id: string | undefined;
  isAdmin: boolean;
}

interface ExtendedUser extends AdapterUser {
  isAdmin: boolean;
  id: string;
}

interface ExtendedSession extends AdapterSession {
  user: ExtendedUser;
}

const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login" || "/register",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
       
        const extendedToken = token as ExtendedToken;
        extendedToken.id = user.id;
        extendedToken.isAdmin = (user as ExtendedUser).isAdmin;
      }
      
      return token;
    },
    async session({ session, token }) {
      if (token) {
        const extendedUser  = {
          ...(session.user as ExtendedUser),
          id: token.id as string,
          isAdmin: token.isAdmin as boolean,
        };
        session.user = extendedUser;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user as ExtendedUser | undefined;
      
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/game");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
      const isOnRegisterPage =
        request.nextUrl?.pathname.startsWith("/register");

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      if ((isOnLoginPage || isOnRegisterPage) && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};

export default authConfig;

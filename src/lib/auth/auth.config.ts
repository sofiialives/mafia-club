import { AuthOptions } from "next-auth";

interface JwtProps {
  id: string;
  isAdmin: boolean;
}

interface SessionProps {
  user: { id: string; isAdmin: boolean };
}

export const authConfig: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  provides: [],
  callbacks: {
    async jwt({ token, user }: { token: JwtProps; user: JwtProps }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({
      session,
      token,
    }: {
      session: SessionProps;
      token: JwtProps;
    }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({
      auth,
      request,
    }: {
      auth: { user: JwtProps | null };
      request: { nextUrl: URL };
    }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/game");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};

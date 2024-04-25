import { NextAuthConfig } from "next-auth";

const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login" || "/register",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
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

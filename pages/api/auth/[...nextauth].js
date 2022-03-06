import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID,
      GOOGLE_CLIENT_ID: "21402435076-csgjc2b7ji8c77dmgblo97emmgp5aor4.apps.googleusercontent.com",
      // clientSecret: process.env.GOOGLE_SECRET,
      GOOGLE_CLIENT_SECRET: "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",
      // NEXTAUTH_URL: "http://localhost:3000"
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
})
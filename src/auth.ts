import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" }
      },
      async authorize(credentials) {
        // Mock simples de autenticação como solicitado
        if (credentials?.email === "admin@admin.com" && credentials?.password === "admin") {
          return { id: "1", name: "Administrador", email: "admin@admin.com" }
        }
        
        // Retorna null caso as credenciais sejam inválidas
        return null;
      }
    })
  ],
  pages: {
    signIn: '/login', // Redireciona para sua página customizada
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        // @ts-ignore
        session.user.id = token.id as string;
      }
      return session;
    }
  }
})

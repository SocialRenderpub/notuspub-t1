import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import {Adapter} from "./../../../utils/fauna"
import faunadb from "faunadb"
const faunaClient = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_KEY,
});

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers: [
    Providers.Cognito({
      clientId: process.env.COGNITO_CLIENT_ID,
      domain: process.env.COGNITO_DOMAIN,
    })
  ],
  adapter: Adapter({faunaClient}),
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    
    
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 24 * 60 * 60, // 30 days
    
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens 
    updateAge: 2 * 60 * 60, // 24 hours
  },
  pages: {
    
    error: '/', // Error code passed in query string as ?error=
    
  },
  events: {
    async signIn(message) { /* on successful sign in */
    console.log(message); },

    async signOut(message) { /* on signout */ 
      console.log(message); },

    async createUser(message) { /* user created */
      console.log(message); },

    async linkAccount(message) { /* account linked to a user */ 
      console.log(message); },

    async session(message) { /* session is active */ 
      console.log(message); },

    async error(message) { /* error in authentication flow */ 
      console.log(message); }
  },
  

  
})

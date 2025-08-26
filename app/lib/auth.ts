import { betterAuth } from "better-auth";
import { Pool } from "pg";
 
export const auth = betterAuth({
    database: new Pool({
        connectionString: process.env.DATABASE_URL,
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    trustedOrigins: ["http://localhost:5173", "https://trykimu.com", "https://www.trykimu.com"],
})
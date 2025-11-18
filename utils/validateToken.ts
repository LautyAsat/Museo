import { jwtVerify } from "jose";
import { cookies } from "next/headers";

export async function validateSession() : Promise<boolean> {
   const tokenCookie = (await cookies()).get("session_token");
  
    if (!tokenCookie) {
      return false;
    }
  
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
      await jwtVerify(tokenCookie.value, secret);  
    } catch (error) {
      return false;
    }


    return true;
  }
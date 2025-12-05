"use server";

import { API_ENDPOINTS, BASE_API_URL } from "@/utils/constants";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"; 

export async function postComment(formData: FormData) {
  const text = formData.get("text") as string;
  const newsId = formData.get("newsId") as string;
  const path = formData.get("path") as string;
  
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  const res = await fetch(`${API_ENDPOINTS.NEWS}/${newsId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ text }),
  });


  if(res.ok){
    revalidatePath(`${path}`);
    return { success: true, message: "¡Su comentario fue enviado con éxito! Será evaluado." };
  }
  else{
    return { success: false, message: "Error al guardar." };
  }

}
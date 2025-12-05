"use server";

import { NewsItem } from "@/features/news/types/newsItem";
import { API_ENDPOINTS } from "@/utils/constants";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function getAllNews(): Promise<NewsItem[]> {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;

  // 2. Hacemos la petición a NestJS desde el servidor
  const response = await fetch(`${API_ENDPOINTS.NEWS}/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
    cache: "no-store", 
  });

  if (!response.ok) {
    
    if (response.status === 401) {
        throw new Error("Sesión expirada");
    }

    console.error("Error fetching news:", response.statusText);
    throw new Error("Error al obtener las noticias");
  }

  return response.json() as Promise<NewsItem[]>;
}

export async function toggleCommentApproval(newsId: string, commentId: string, isApproved: boolean) {
  const cookieStore = await cookies();
  const token = cookieStore.get("session_token")?.value;
    
    await fetch(`${API_ENDPOINTS.NEWS}/${newsId}/comments/${commentId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ isApproved })
    });

    revalidatePath('/admin/comments'); 
}
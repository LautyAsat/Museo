"use client";

import Paragraph from "@/components/Paragraph";
import Subtitle from "@/components/subtitle";
import { API_ENDPOINTS } from "@/utils/constants";
import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

export default function page() {
  const token = Cookies.get("session_token");
  const query = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await fetch(`${API_ENDPOINTS.NEWS}/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  return (
    <div className="px-4 md:px-10 lg:px-20 2xl:px-0 max-w-[1440px] w-full mx-auto py-20">
      <Subtitle className="font-cormorant text-5xl font-bold mb-4">
        Noticias
      </Subtitle>
      <Paragraph>Gestión de noticias próximamente</Paragraph>
    </div>
  );
}

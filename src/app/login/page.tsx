import type { Metadata } from "next";
import { Suspense } from "react";
import LoginRegistration from "@/components/LoginRegistration";

export const metadata: Metadata = {
  title: "Login y registro | Tenlo",
  description: "Acceso adulto para familias, centros educativos, profesionales y servicios locales de Tenlo."
};

export default function LoginPage() {
  return (
    <Suspense>
      <LoginRegistration />
    </Suspense>
  );
}

import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AccountSettings from "@/components/AccountSettings";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Datos de cuenta | Tenlo",
  description: "Consulta datos de cuenta, cambia contraseña o solicita la baja en Tenlo."
};

export default async function AccountDataPage() {
  const supabase = createSupabaseServerClient();
  const { data: authData } = await supabase.auth.getUser();
  const user = authData.user;

  if (!user) redirect("/login?next=/datos-cuenta");

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name,public_name,contact_email,role,status,municipality")
    .eq("id", user.id)
    .maybeSingle();

  const displayName = profile?.display_name ?? profile?.public_name ?? user.email?.split("@")[0] ?? "Usuario Tenlo";

  return (
    <div className="section-shell">
      <p className="label">Área personal</p>
      <h1 className="page-title">Datos de cuenta</h1>
      <p className="lead max-w-4xl">Consulta tus datos principales, cambia tu contraseña o solicita la baja de la cuenta.</p>

      <div className="mt-8">
        <AccountSettings
          email={profile?.contact_email ?? user.email ?? ""}
          displayName={displayName}
          role={profile?.role ?? "family"}
          status={profile?.status ?? "approved"}
          municipality={profile?.municipality}
        />
      </div>
    </div>
  );
}

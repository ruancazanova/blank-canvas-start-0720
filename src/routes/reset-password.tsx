import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/reset-password")({
  component: ResetPassword,
});

function ResetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com Supabase ou API de recuperação de senha
    console.log("Solicitação de recuperação para:", email);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <section className="w-full max-w-md rounded-lg bg-card p-6 shadow-sm">
        <h1 className="mb-4 text-center text-2xl font-bold text-foreground">
          Recuperar senha
        </h1>
        <p className="mb-6 text-center text-sm text-muted-foreground">
          Insira o e‑mail associado à sua conta e enviaremos instruções para redefinir sua senha.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-foreground">
              E‑mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Enviar link de recuperação
          </Button>
        </form>
      </section>
    </main>
  );
}

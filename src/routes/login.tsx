import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrar com Supabase ou API de login
    console.log("Login attempt:", { email, password });
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-4">
      <section className="w-full max-w-md rounded-lg bg-card p-6 shadow-sm">
        <h1 className="mb-4 text-center text-2xl font-bold text-foreground">
          Entrar
        </h1>
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
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-foreground">
              Senha
            </label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Button asChild variant="link" className="text-sm">
            <Link to="/reset-password">Esqueci a senha?</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { GROK_PROVIDERS, authEnabled, signIn } from "@/lib/auth/client";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  return (
    <div className="mx-auto max-w-sm py-10">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-muted uppercase">
        Account
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold">Sign in</h1>
      <p className="mt-2 text-sm text-ink-soft">
        Optional. Your study progress is saved on this device either way. Sign in
        if you want an account on this app.
      </p>
      <div className="mt-6 space-y-2">
        {authEnabled ? (
          GROK_PROVIDERS.map((p) => (
            <Button
              key={p.providerId}
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => signIn(p.providerId, { callbackURL: "/" })}
            >
              Continue with {p.label}
            </Button>
          ))
        ) : (
          <p className="text-sm text-muted">Sign-in is disabled.</p>
        )}
      </div>
      <Link to="/" className="mt-6 inline-block text-sm font-medium text-crimson">
        Back to study
      </Link>
    </div>
  );
}

"use client";

import { FormEvent, ReactNode, useId, useState } from "react";

type ValidatedSearchFormProps = {
  action?: string;
  className?: string;
  children: ReactNode;
  message?: string;
};

export default function ValidatedSearchForm({
  action = "/buscar",
  className,
  children,
  message = "Completa al menos un campo para buscar o filtrar."
}: ValidatedSearchFormProps) {
  const [error, setError] = useState("");
  const errorId = useId();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    const hasValue = Array.from(data.entries()).some(([, value]) => String(value).trim().length > 0);
    if (!hasValue) {
      event.preventDefault();
      setError(message);
      return;
    }
    setError("");
  }

  return (
    <form action={action} className={className} onSubmit={handleSubmit} aria-describedby={error ? errorId : undefined}>
      {children}
      {error ? <p id={errorId} className="text-sm font-semibold text-coral" role="alert">{error}</p> : null}
    </form>
  );
}

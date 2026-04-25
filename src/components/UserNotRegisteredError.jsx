import React from "react";

export default function UserNotRegisteredError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 shadow-sm text-center space-y-3">
        <h1 className="text-xl font-semibold text-slate-900">
          Korisnik nije registrovan
        </h1>
        <p className="text-sm text-slate-600">
          Ova poruka je prikazana samo u razvojnoj verziji. U produkciji bi ovde
          bila redirekcija na stranicu za prijavu.
        </p>
      </div>
    </div>
  );
}


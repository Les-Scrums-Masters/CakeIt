import React from "react";

import JoinForm from "./joinForm";

export default function Homepage(props) {
  return (
    <div className="bg-grey justify container mx-auto flex h-full w-full flex-col items-center justify-center gap-5 align-middle">
      <h1 className="text-center text-6xl font-bold text-error">Cake It !</h1>
      <p className="max-w-lg text-center">
        Apprenez comment les mécanismes du marché influent sur les décisions des
        producteurs face aux circonstances extérieures
      </p>

      <JoinForm />

      <button className="btn btn-outline btn-secondary">Tutoriel</button>
    </div>
  );
}

// TEKNIK CONDITIONAL RENDERING

import React from "react";

export const Dashboard = () => {
  return <>Dashboard</>;
};

export const LoginForm = () => {
  return <>Login Form</>;
};

const ConditionalRendering = () => {
  // let content;
  // const isLoggedIn = true;
  // const hasError = true;
  // const status = "error";

  // 1. IF STATEMENT
  //   if (isLoggedIn) {
  //     content = <Dashboard />;
  //   } else {
  //     content = <LoginForm />;
  //   }

  // 2. TERNARY OPERATOR
  //   return <div>{isLoggedIn ? <Dashboard /> : <LoginForm />}</div>;

  // 3. SHORT CIRCUIT EVALUATION (&&)
  //   return (
  //     <div>{hasError && <p style={{ color: "red" }}>Terjadi kesalahan</p>}</div>
  //   );

  // 4. IIFE (IMMEDIATELY INVOKED FUNCTION EXPRESSION)
  //   return (
  //     <div>
  //       {(() => {
  //         if (status == "loading") return <p>Loading....</p>;
  //         if (status == "error") return <p>Error terjadi...</p>;
  //         return <p>Data berhasil dimuat</p>;
  //       })()}
  //     </div>
  //   );

  return <>Conditional Rendering</>;
};

export default ConditionalRendering;

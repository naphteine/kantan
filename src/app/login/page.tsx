"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";

export default function Login() {
  const router = useRouter();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  function emailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputEmail(e.target.value);
  }

  function passwdChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputPassword(e.target.value);
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = await fetch(`/api/login`, {
      method: "PUT",
      body: JSON.stringify({ email: inputEmail, password: inputPassword }),
    });
    console.log(data);
  }

  return (
    <>
      <Header />
      <h1>Login Page</h1>
      <form onSubmit={submit}>
        <input
          onChange={emailChange}
          type="email"
          id="email"
          name="email"
          placeholder="E-Mail"
        />
        <input
          onChange={passwdChange}
          type="password"
          id="passwd"
          name="passwd"
          placeholder="Şifre"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

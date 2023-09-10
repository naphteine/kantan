// ./app/actions.ts

'use server';

import { redirect } from 'next/navigation';
import PocketBase from 'pocketbase';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // TODO: server-side validation

  const pb = new PocketBase(process.env.POCKETBASE_URL);

  const { token, record: model } = await pb
    .collection('kantan_users')
    .authWithPassword(email, password);

  const cookie = JSON.stringify({ token, model });

  cookies().set('pb_auth', cookie, {
    secure: true,
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
  });

  redirect('/dashboard');
}

export async function logout() {
  cookies().delete('pb_auth');
  redirect('/');
}

export async function newTask(formData: FormData) {
  const pb = new PocketBase(process.env.POCKETBASE_URL);
  const task = formData.get("task");
  const userCookie = cookies().get("pb_auth");

  console.log(userCookie);

  if (!userCookie) throw new Error("Not logged in");

  const id = JSON.parse(userCookie.value).model.id;
  console.log("ID is = ", id);

  const data = {
    "task": task,
    "user": id,
  };

  const record = await pb.collection('kantan_tasks').create(data);
}
'use client';

import { useGetUserData } from '@/hooks/reactQuery/user';

export default function Home() {
  const { data } = useGetUserData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>유저 데이터</h1>
      {data?.map((user) => <h1 key={user.id}>{user?.user_grade}</h1>)}
    </main>
  );
}

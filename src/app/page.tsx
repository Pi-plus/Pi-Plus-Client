'use client';

import userApi from '@/apis/users';

export default function Home() {
  userApi.get().then((res) => {
    console.log(res);
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>어떻게 하까</div>
    </main>
  );
}

import React from 'react';

export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <h1>Auth Layout</h1>
            {children}
        </div>
    </section>
  )
}

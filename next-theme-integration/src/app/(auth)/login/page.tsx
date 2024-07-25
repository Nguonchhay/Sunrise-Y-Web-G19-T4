import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl">
        <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}

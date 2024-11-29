import { LoginButton } from "@/components/login-button";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">
          Auth{" "}
        </h1>
        <p className="text-xl font-semibold text-white">
          A simple authentication service
        </p>

        <LoginButton mode="redirect">
          <Button variant={"secondary"} size={"lg"}>
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}

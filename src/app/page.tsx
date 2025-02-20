import { Button } from "@/components/ui/button";
import ChildComponent from "@/components/ui/testing/ChildComponent";
import LoginForm from "@/components/ui/testing/LoginForm";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <LoginForm />
      <ChildComponent />
    </div>
  );
}

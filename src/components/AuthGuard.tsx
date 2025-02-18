import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { isLoaded, isSignedIn } = useUser();  
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.replace("/login"); // Ensure "/login" is the correct path
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading state while Clerk is still determining authentication status
  if (!isLoaded) return <p>Loading...</p>;

  return <>{children}</>;
};

export default AuthGuard;

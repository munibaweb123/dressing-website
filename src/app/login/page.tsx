"use client";

import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton } from "@clerk/nextjs";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 max-w-6xl mx-auto">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Authentication
        </h2>

        {/* Show login UI only when the user is signed out */}
        <SignedOut>
          <SignIn />
        </SignedOut>

        {/* Show logout button when user is signed in */}
        <SignedIn>
          <div className="text-center">
            <p className="text-gray-600 mb-4">You are already signed in.</p>
            <SignOutButton>
              <button className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-700 transition">
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </SignedIn>
      </div>
    </div>
  );
}

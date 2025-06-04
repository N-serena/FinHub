// This is a simple landing page component for a bank dashboard application.
// It features a centered title, subtitle, and a call-to-action button to connect a bank account.

import { usePlaidLink } from "react-plaid-link";
import useUserStore from "../store/useUserStore";

export default function LandingPage() {
  const linkToken = "link-sandbox-c0565564-40a6-410d-9a7f-34783882560d"; // Replace with your actual link token
  const setPublicToken = useUserStore((state) => state.setPublicToken);
  //const setIsLinked = useUserStore((state) => state.setIsLinked);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: (public_token, metadata) => {
      console.log("public_token:", public_token);
      console.log("metadata:", metadata);
      setPublicToken(public_token);
      //setIsLinked(true);
      window.location.href = "/dashboard";
    },
  });

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Bank Dashboard</h1>
        <p className="text-lg text-gray-600">Track your spending across banks</p>
        <button
          onClick={() => open()}
          disabled={!ready}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 disabled:opacity-50"
        >
          Connect your bank
        </button>
      </div>
    </div>
  );
}
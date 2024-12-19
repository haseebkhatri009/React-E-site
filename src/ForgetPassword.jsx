import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "./firebase";
import Swal from "sweetalert2";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(false); // Stop loading
      Swal.fire({
        title: "Email Sent",
        text: "Please check your inbox for password reset instructions.",
        icon: "success",
      });
    } catch (error) {
      setLoading(false); // Stop loading
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleResetPassword} className="space-y-4">
        <h1 className="text-2xl font-bold">Reset Your Password</h1>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Reset Email"}
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;

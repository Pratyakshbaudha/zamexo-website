"use client";
import { useState } from "react";

export default function AuthPage() {
  const [tab, setTab] = useState("login");

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4 py-12">
      {/* ↑ min-h adjusted so it fits between header & footer */}

      <div className="bg-white w-full max-w-5xl rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 border">

        {/* LEFT IMAGE PANEL */}
        {/* LEFT IMAGE PANEL */}
<div className="hidden md:block relative h-full w-full border-r-30">
  <img
    src="/images/text-login1.png"
    alt="Zamexo Login"
    className="absolute inset-0 h-full w-full object-cover pb-20 border-r-20"
  />
</div>

        {/* RIGHT FORM PANEL */}
        <div className="p-10">

          {/* TABS */}
          <div className="flex mb-8 border rounded-full overflow-hidden bg-gray-100">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
                tab === "login"
                  ? "bg-blue-900 text-white"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              CLIENT LOGIN
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 py-2.5 text-sm font-semibold transition-all ${
                tab === "register"
                  ? "bg-blue-900 text-white"
                  : "text-gray-700 hover:text-blue-900"
              }`}
            >
              NEW REGISTRATION
            </button>
          </div>

          {/* SLIDER */}
          <div className="relative w-full overflow-hidden">
            <div
              className={`flex w-[200%] transition-transform duration-500 ease-in-out ${
                tab === "login" ? "translate-x-0" : "-translate-x-1/2"
              }`}
            >

              {/* LOGIN FORM */}
              <div className="w-1/2 px-3">
                <h2 className="text-xl font-bold mb-6 text-gray-900">
                  Login to Your Account
                </h2>

                <form className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      Email / Mobile
                    </label>
                    <input
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:ring-2 focus:ring-blue-700 outline-none"
                      placeholder="Enter registered email or mobile"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      Password
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1 focus:ring-2 focus:ring-blue-700 outline-none"
                      placeholder="Enter password"
                    />
                  </div>

                  <div className="flex justify-between text-xs text-blue-900">
                    <button type="button">Forgot Password?</button>
                    <button type="button">Login with OTP</button>
                  </div>

                  <button className="w-full bg-blue-900 text-white py-2.5 rounded-full hover:bg-blue-800 transition font-semibold">
                    Login Securely
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By continuing, you agree to Zamexo Terms & Privacy Policy
                  </p>
                </form>
              </div>

              {/* REGISTER FORM */}
              <div className="w-1/2 px-3">
                <h2 className="text-xl font-bold mb-6 text-gray-900">
                  Create Your Account
                </h2>

                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      Full Name
                    </label>
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      Email
                    </label>
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      Mobile Number
                    </label>
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1" />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      Account Type
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1">
                      <option>Client</option>
                      <option>Business Owner</option>
                      <option>Franchise Partner</option>
                      <option>Student / Intern</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      Set Password
                    </label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-800">
                      OTP Verification
                    </label>
                    <input className="w-full border border-gray-300 rounded-lg px-4 py-2.5 mt-1" />
                  </div>

                  <label className="flex items-start gap-2 text-xs text-gray-700">
                    <input type="checkbox" className="mt-1 accent-blue-900" />
                    I agree to Terms, Privacy Policy & Franchise Guidelines
                  </label>

                  <button className="w-full bg-blue-900 text-white py-2.5 rounded-full hover:bg-blue-800 transition font-semibold">
                    Create Account
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

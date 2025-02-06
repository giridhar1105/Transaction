"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome, FaCog, FaHistory, FaShieldAlt, FaBell, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { title: "Dashboard", icon: <FaHome />, path: "/", color: "hover:bg-blue-600" },
    { title: "Account Settings", icon: <FaCog />, path: "/settings", color: "hover:bg-purple-600" },
    { title: "Transaction History", icon: <FaHistory />, path: "/transactions", color: "hover:bg-green-600" },
    { title: "Fraud Detection", icon: <FaShieldAlt />, path: "/fraud-detection", color: "hover:bg-red-600" },
    { title: "Notifications", icon: <FaBell />, path: "/notifications", color: "hover:bg-yellow-600" },
    { title: "Logout", icon: <FaSignOutAlt />, path: "/logout", color: "hover:bg-pink-600" },
  ];

  return (
    <div
      className={`bg-gradient-to-b from-indigo-900 to-purple-900 text-white h-screen fixed top-0 left-0 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <button
        className="p-4 w-full text-right bg-opacity-20 bg-white hover:bg-opacity-30 transition-all"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "←" : "→"}
      </button>

      <nav className="mt-5">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center p-4 ${item.color} transition-all duration-200 border-l-4 border-transparent hover:border-white`}
          >
            <span className="text-xl text-white">{item.icon}</span>
            {isOpen && (
              <span className="ml-4 font-medium tracking-wide">{item.title}</span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default function Dashboard() {
  // User details as an object
  const user = {
    name: "Giridhar  D",
    email: 'giridhaar1105"gmail.com',
    avatar: "👤",
    status: ["Active", "Email Verified", "2FA Enabled"],
  };

  // Financial details as an object
  const financialOverview = {
    balance: 10500000,
    recentTransactions: [
      { type: "Deposit", amount: 2000, date: "2025-01-15" },
      { type: "Withdrawal", amount: -500, date: "2025-01-14" },
      { type: "Payment", amount: -120, date: "2025-01-13" },
    ],
  };

  // Security status as an object
  const securityStatus = {
    riskScore: 75,
    alerts: [
      { message: "Suspicious login attempt detected", type: "warning" },
      { message: "Unusual transaction detected", type: "warning" },
    ],
  };

  return (
    <div className="flex">
      <Sidebar />
      <div
        className="flex-1 p-6 bg-gray-50 min-h-screen transition-all duration-300 ml-64"
        style={{ marginLeft: "16rem" }}
      >
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* User Overview Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">{user.avatar}</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-black">{user.name}</h2>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              {user.status.map((stat, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                >
                  {stat}
                </span>
              ))}
            </div>
          </div>

          {/* Financial Overview Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h2 className="text-xl font-bold mb-4 text-black">Financial Overview</h2>
            <div className="mb-4">
              <p className="text-gray-600">Account Balance</p>
              <p className="text-3xl font-bold text-green-600">
                ₹{financialOverview.balance.toLocaleString("en-IN")}
              </p>
            </div>
            <div className="space-y-2">
              {financialOverview.recentTransactions.map((transaction, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-black">{transaction.type}</span>
                  <span
                    className={`text-sm ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    ₹{Math.abs(transaction.amount).toLocaleString("en-IN")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Status Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <h2 className="text-xl font-bold mb-4 text-black">Security Status</h2>
            <div className="mb-4">
              <p className="text-gray-600">Risk Score</p>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: `${securityStatus.riskScore}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {securityStatus.riskScore}/100 - Elevated Risk
              </p>
            </div>
            <div className="space-y-2">
              {securityStatus.alerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-2 ${
                    alert.type === "warning"
                      ? "bg-red-50 text-red-700"
                      : "bg-green-50 text-green-700"
                  } rounded-lg text-sm`}
                >
                  ⚠️ {alert.message}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Transfer Funds
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Deposit Funds
          </button>
          <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Review Alerts
          </button>
        </div>
      </div>
    </div>
  );
}

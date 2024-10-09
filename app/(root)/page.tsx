import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { Lasso } from "lucide-react";
import React from "react";

const Home = () => {
  const loggedIn = {
    firstName: "Tremolo",
    lastName: "Miller",
    email: "sage&jill@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={3}
            totalCurrentBalance={12345}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 2211 }, { currentBalance: 500 }]}
      />
    </section>
  );
};

export default Home;

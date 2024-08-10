import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import RecentTransactions from '@/components/RecentTransactions'

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;
  
  try {
    const loggedIn = await getLoggedInUser();

    if (!loggedIn) {
      return (
        <section className="home">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user="Guest"
            subtext="Please log in to access your account and transactions."
          />
        </section>
      );
    }

    const accounts = await getAccounts({ userId: loggedIn.$id });

    if (!accounts || !accounts.data) {
      return (
        <section className="home">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || 'Guest'}
            subtext="Unable to retrieve account information. Please try again later."
          />
        </section>
      );
    }

    const accountsData = accounts.data;
    const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
    const account = await getAccount({ appwriteItemId });

    console.log({
      accountsData,
      account
    });

    return (
      <section className="home">
        <div className="home-content">
          <header className="home-header">
            <HeaderBox
              type="greeting"
              title="Welcome"
              user={loggedIn.firstName || 'Guest'}
              subtext="Access and manage your account and transactions efficiently."
            />

            <TotalBalanceBox 
              accounts={accountsData}
              totalBanks={accounts.totalBanks}
              totalCurrentBalance={accounts.totalCurrentBalance}
            />
          </header>
          
          <RecentTransactions 
            accounts={accountsData}
            transactions={account?.transactions}
            appwriteItemId={appwriteItemId}
            page={currentPage}
          />
        </div>

        <RightSidebar
          user={loggedIn}
          transactions={account?.transactions}
          banks={accountsData?.slice(0, 2)}
        />
      </section>
    )
  } catch (error) {
    console.error("Error in Home component:", error);
    return (
      <section className="home">
        <HeaderBox
          type="greeting"
          title="Welcome"
          user="Guest"
          subtext="An error occurred. Please try again later."
        />
      </section>
    );
  }
}

export default Home
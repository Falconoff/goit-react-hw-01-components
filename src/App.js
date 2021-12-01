import Profile from './components/Profile/Profile'
import user from './db/user.json'

import Statistics from './components/Statistics/Statistics'
import data from './db/data.json'

import FriendList from './components/FriendList/FriendList'
import friendsArr from './db/friends.json'

import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactions from './db/transactions.json'

import AppStyles from './App.module.css';

function App() {
  return (
    <div className={AppStyles.App}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="qweqwe" data={data} />

      <FriendList friends={friendsArr} />

      <TransactionHistory items={transactions} />
    </div>
  )
}

export default App
import { Profile } from './Profile/Profile';
import user from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        padding: 50,
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 100,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 24,
        color: '#010101',
        backgroundColor: 'darkgray',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

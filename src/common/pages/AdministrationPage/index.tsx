import { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Navbar from '../../Navbar';
import { Group } from './Group';
import GroupDetail from './GroupDetail';
import { User } from './User';
import UserDetail from './UserDetail';

// @TODO: dynamically import to decrease bundle size for general users

const useDataList = <T extends {}>(url: string): [T[], T | null, (value: T) => void, boolean] => {
  const [selected, setSelected] = useState<T | null>(null);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      }).finally(() => {
        setLoading(false);
      });
  }, [url]);

  return [data, selected, setSelected, loading];
};

const AdministrationPage = () => {
  const [users, selectedUser, setSelectedUser] = useDataList<User>('/api/users');
  const [groups, selectedGroup, setSelectedGroup] = useDataList<Group>('/api/groups');

  return (
    <Layout>
      <Navbar showBrand />
      <div className="container">
        <h2>Administrace</h2>
        {groups && (
          <>
            <h3>Skupiny</h3>
            <ul>
              {groups.map((group) => (
                <li key={group.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedGroup(group);
                    }}
                  >
                    {group === selectedGroup ? (
                      <b>{group.data.name}</b>
                    ) : (
                      group.data.name
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
        {selectedGroup && (<GroupDetail group={selectedGroup} />)}
        {groups && (
          <>
            <h3>Uživatelé</h3>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedUser(user);
                    }}
                  >
                    {user === selectedUser ? (
                      <b>{user.data.name}</b>
                    ) : (
                      user.data.name
                    )}
                  </button>
                </li>
              ))}
            </ul>
            {selectedUser && (<UserDetail user={selectedUser} />)}
          </>
        )}
      </div>
    </Layout>
  );
};

export default AdministrationPage;

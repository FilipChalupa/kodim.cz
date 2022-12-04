import { useEffect, useState } from 'react';
import Layout from '../../Layout';
import Navbar from '../../Navbar';
import { Group } from './Group';
import GroupDetail from './GroupDetail';

// @TODO: dynamically import to decrease bundle size for general users

const AdministrationPage = () => {
  const [groups, setGroups] = useState<null | Group[]
  >(null);
  const [selectedGroup, setSelectedGroup] = useState<null | Group>(null);

  useEffect(() => {
    fetch('/api/groups')
      .then((response) => response.json())
      .then((data) => { setGroups(data); });
  }, []);

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
      </div>
    </Layout>
  );
};

export default AdministrationPage;

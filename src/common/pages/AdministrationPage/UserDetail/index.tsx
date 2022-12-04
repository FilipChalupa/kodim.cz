import { useEffect, useState } from 'react';
import { User } from '../User';

interface Props {
  user: User;
}

const UserDetail = ({ user }: Props): JSX.Element => {
  const [detailData, setDetailData] = useState<null | any>(null);

  useEffect(() => {
    fetch(user.url)
      .then((response) => response.json())
      .then((data) => { setDetailData(data); });
  }, [user.url]);

  return (
    <>
      <h4>
        Uživatel
        {' '}
        {user.data.name}
      </h4>
      <pre>{JSON.stringify(detailData, null, 2)}</pre>
    </>
  );
};

export default UserDetail;

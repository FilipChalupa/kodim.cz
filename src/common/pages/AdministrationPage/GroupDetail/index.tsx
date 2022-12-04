import { useEffect, useState } from 'react';
import { Group } from '../Group';

interface Props {
  group: Group;
}

const GroupDetail = ({ group }: Props): JSX.Element => {
  const [detailData, setDetailData] = useState<null | any>(null);

  useEffect(() => {
    fetch(group.url)
      .then((response) => response.json())
      .then((data) => { setDetailData(data); });
  }, [group.url]);

  return (
    <>
      <h4>
        Skupina
        {' '}
        {group.data.name}
      </h4>
      <pre>{JSON.stringify(detailData, null, 2)}</pre>
    </>
  );
};

export default GroupDetail;

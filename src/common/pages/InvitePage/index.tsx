import { Helmet } from 'react-helmet';
import Layout from '../../Layout';
import Navbar from '../../Navbar';
import { ServerContextValue, useData } from '../../AppContext';
import InfoPanel from '../../InfoPanel';
import InvitationMessage, { Invitation } from './InvitationMessage';
import InvitationFooter from './InvitationFooter';

const getInvitation = (context: ServerContextValue): Invitation => {
  return context.store.invitation;
};

const InvitePage = () => {
  const invitation = useData(getInvitation);

  return (
    <Layout>
      <Helmet>
        <title>Pozvánka</title>
      </Helmet>
      <Navbar showBrand />
      <div className="container">
        <InfoPanel
          heading="Pozvánka do skupiny"
          footer={<InvitationFooter invitation={invitation} />}
        >
          <InvitationMessage invitation={invitation} />
        </InfoPanel>
      </div>
    </Layout>
  );
};

export default InvitePage;

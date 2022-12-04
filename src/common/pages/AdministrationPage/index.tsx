import {
  FunctionComponent, useEffect, useState,
} from 'react';
import Layout from '../../Layout';
import Navbar from '../../Navbar';

// const Inner = lazy(() => import('./Inner'));

const AdministrationPage = () => {
  const [inner, setInner] = useState<null | { component: FunctionComponent }>(null);

  useEffect(
    () => {
      import('./Inner').then((module) => {
        setInner({ component: module.default });
      });
    },
    [],
  );

  return (
    <Layout>
      <Navbar showBrand />
      <div className="container">
        {inner ? <inner.component /> : 'Načítám…'}
        {/* <Suspense fallback={<>Načítám…</>}>
          <Inner />
        </Suspense> */}
      </div>
    </Layout>
  );
};

export default AdministrationPage;

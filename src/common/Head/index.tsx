import { Helmet } from 'react-helmet';
import { useAppContext } from '../AppContext';

const title = 'Kódím.cz';

const Head = () => {
  const { serverUrl } = useAppContext();

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="cs" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link
        rel="icon"
        href="/assets/icons/favicon-16.png"
        type="image/png"
        sizes="16x16"
      />
      <link
        rel="icon"
        href="/assets/icons/favicon-32.png"
        type="image/png"
        sizes="32x32"
      />
      <link
        rel="icon"
        href="/assets/icons/favicon-128.png"
        type="image/png"
        sizes="128x128"
      />
      <link
        rel="icon"
        href="/assets/icons/favicon-152.png"
        type="image/png"
        sizes="152x152"
      />
      <link
        rel="icon"
        href="/assets/icons/favicon-167.png"
        type="image/png"
        sizes="167x167"
      />
      <link
        rel="icon"
        href="/assets/icons/favicon-180.png"
        type="image/png"
        sizes="180x180"
      />
      <link
        rel="icon"
        href="/assets/icons/favicon-192.png"
        type="image/png"
        sizes="192x192"
      />
      <link
        rel="icon"
        href="/assets/icons/favicon-196.png"
        type="image/png"
        sizes="196x196"
      />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,800;1,500&family=Roboto+Mono:wght@400;700&display=swap"
      />
      <link rel="stylesheet" href="/assets/normalize.css" />
      <link rel="stylesheet" href="/assets/style.css" />

      <meta property="og:image:width" content="2400" />
      <meta property="og:image:height" content="1260" />
      <meta property="og:image" content={`${serverUrl}/assets/og-image.png`} />

      <meta name="color-scheme" content="only light" />
      <meta name="theme-color" content="#2C3E66" />

      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-134495569-1"></script>
        <script type="text/javascript">
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'UA-134495569-1');
        </script> */}

      <meta
        name="description"
        content="Programování hravě i vážně. Podklady pro prezenční kurzy vytvořené ve spolupráci s organizací Czechitas."
      />
    </Helmet>
  );
};

export default Head;

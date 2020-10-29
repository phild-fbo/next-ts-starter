import { FC } from 'react';
import { AppProps } from 'next/app';

import '../global.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
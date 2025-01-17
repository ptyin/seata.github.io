import React from 'react';
import { translate } from '@docusaurus/Translate';
import './index.scss';

import BrowserOnly from '@docusaurus/BrowserOnly';

const data = {
  title: translate({ id: 'homepage.msemapTitle', message: '微服务全景图' }),
};

const MseMap = () => {
  return (
    <BrowserOnly>
      {() => (
        <section className="msemap-section">
          <div className="msemap-container">
            <h3>{data.title}</h3>
            <div id="mse-arc-container"></div>
          </div>
        </section>
      )}
    </BrowserOnly>
  );
};

export default MseMap;
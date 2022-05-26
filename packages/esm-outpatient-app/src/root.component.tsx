import React, { useEffect } from 'react';
import { SWRConfig } from 'swr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { spaBasePath } from './constants';
import { OutpatientDashboard } from './dashboard/outpatient-dashboard.component';
import { setLeftNav, unsetLeftNav } from '@openmrs/esm-framework';

const swrConfiguration = {
  // Maximum number of retries when the backend returns an error
  errorRetryCount: 3,
};

const Root: React.FC = () => {
  useEffect(() => {
    setLeftNav({ name: 'outpatient-dashboard-slot', basePath: spaBasePath });
    return () => unsetLeftNav('outpatient-dashboard-slot');
  }, []);

  return (
    <main>
      <SWRConfig value={swrConfiguration}>
        <BrowserRouter basename={spaBasePath}>
          <Routes>
            <Route path="/:view?" element={<OutpatientDashboard />} />
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </main>
  );
};

export default Root;

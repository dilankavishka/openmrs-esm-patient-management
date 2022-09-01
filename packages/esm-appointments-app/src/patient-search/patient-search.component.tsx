import React from 'react';
import { ExtensionSlot } from '@openmrs/esm-framework';
import styles from './patient-search.scss';
import { closeOverlay, launchOverlay } from '../hooks/useOverlay';
import { useTranslation } from 'react-i18next';
import CreateAppointmentsForm from '../appointment-forms/create-appointment-form.component';

const PatientSearch: React.FC = () => {
  const { t } = useTranslation();
  const launchCreateAppointmentForm = (patientUuid: string) => {
    closeOverlay();
    launchOverlay(t('appointmentForm', 'Appointments Form'), <CreateAppointmentsForm patientUuid={patientUuid} />);
  };

  const state = {
    isSearchPage: false,
    initialSearchTerm: '',
    selectPatientAction: (patientUuid: string) => launchCreateAppointmentForm(patientUuid),
    shouldNavigateToPatientSearchPage: false,
  };

  return (
    <div className="omrs-main-content">
      <span className={styles.searchBarWrapper}>
        <ExtensionSlot extensionSlotName="patient-search-bar-slot" state={state} />
      </span>
    </div>
  );
};

export default PatientSearch;

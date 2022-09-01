import React from 'react';
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  RadioButton,
  RadioButtonGroup,
} from '@carbon/react';
import { useTranslation } from 'react-i18next';
import styles from './change-appointment-status.scss';

const appointmentStatus = [
  { uuid: 1, display: 'Checkin', name: 'checkin' },
  { uuid: 2, display: 'Completed', name: 'completed' },
];

interface ChangeAppointmentStatusProps {
  closeModal: () => void;
}

const ChangeAppointmentStatus: React.FC<ChangeAppointmentStatusProps> = ({ closeModal }) => {
  const { t } = useTranslation();
  return (
    <div>
      <ModalHeader closeModal={closeModal} title={t('changeAppointmentStatus', 'Change patient appointment status?')} />
      <ModalBody>
        <Form>
          <FormGroup legendText="">
            <RadioButtonGroup className={styles.radioButtonGroup} orientation="vertical" name="radio-button-group">
              {appointmentStatus.map(({ uuid, display, name }) => (
                <RadioButton key={uuid} className={styles.radioButton} id={name} labelText={display} value={uuid} />
              ))}
            </RadioButtonGroup>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button kind="secondary" onClick={() => closeModal()}>
          {t('cancel', 'Cancel')}
        </Button>
        <Button onClick={() => closeModal()}>{t('exitAndChangeStatus', 'Exit and change status')}</Button>
      </ModalFooter>
    </div>
  );
};

export default ChangeAppointmentStatus;

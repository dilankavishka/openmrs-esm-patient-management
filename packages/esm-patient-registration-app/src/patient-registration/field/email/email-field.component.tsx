import React from 'react';
import { Input } from '../../input/basic-input/input/input.component';
import { useTranslation } from 'react-i18next';
import { PhoneField } from '../phone/phone-field.component';
import styles from '../field.scss';

export const PhoneEmailField: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4 className={styles.productiveHeading02Light}>{t('phoneEmailLabelText', 'Phone, Email')}</h4>
      <div className={styles.grid}>
        <PhoneField />
        <Input
          id="email"
          // This UUID will be fixed for all the distributions in OPENMRS
          name="attributes.b8d0b331-1d2d-4a9a-b741-1816f498bdb6"
          labelText={t('emailLabelText', 'Email')}
        />
      </div>
    </div>
  );
};

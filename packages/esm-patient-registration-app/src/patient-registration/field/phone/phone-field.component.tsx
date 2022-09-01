import React from 'react';
import { Input } from '../../input/basic-input/input/input.component';
import { useTranslation } from 'react-i18next';

export const PhoneField: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Input
        id="phone"
        //This UUID will be fixed for all the distributions of OPENMRS.
        name="attributes.b2c38640-2603-4629-aebd-3b54f33f1e3a"
        labelText={t('phoneNumberInputLabelText', 'Phone number')}
        light
      />
    </div>
  );
};

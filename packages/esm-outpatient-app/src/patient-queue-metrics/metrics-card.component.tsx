import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Layer, Tile } from '@carbon/react';
import { ArrowRight } from '@carbon/react/icons';
import styles from './metrics-card.scss';

interface MetricsCardProps {
  label: string;
  value: number;
  headerLabel: string;
  children?: React.ReactNode;
}

const MetricsCard: React.FC<MetricsCardProps> = ({ label, value, headerLabel, children }) => {
  const { t } = useTranslation();

  return (
    <Layer>
      <Tile className={styles.tileContainer}>
        <div className={styles.tileHeader}>
          <div className={styles.headerLabelContainer}>
            <label className={styles.headerLabel}>{headerLabel}</label>
            {children}
          </div>
          <Button
            kind="ghost"
            renderIcon={(props) => <ArrowRight {...props} size={16} />}
            iconDescription={t('patientList', 'Patient list')}>
            {t('patientList', 'Patient list')}
          </Button>
        </div>
        <div>
          <label className={styles.totalsLabel}>{label}</label>
          <p className={styles.totalsValue}>{value}</p>
        </div>
      </Tile>
    </Layer>
  );
};

export default MetricsCard;

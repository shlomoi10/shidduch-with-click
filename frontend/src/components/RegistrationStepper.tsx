import React from 'react';
import { Box, Stepper, Step, StepLabel, Typography } from '@mui/material';

interface RegistrationStepperProps {
  activeStep: number;
}

const steps = [
  'הרשמה ראשונית',
  'פרטים אישיים',
  'השכלה',
  'סיום',
];

const RegistrationStepper: React.FC<RegistrationStepperProps> = ({ activeStep }) => {
  return (
    <Box sx={{ width: '100%', mt: 3 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>
              <Typography sx={{ fontSize: '0.875rem' }}>{label}</Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default RegistrationStepper;

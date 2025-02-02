import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const steps = [
  {
    label: 'פרטי התחברות',
    description: 'מייל וסיסמה',
  },
  {
    label: 'פרטים אישיים',
    description: 'מידע בסיסי עליך',
  },
  {
    label: 'השכלה',
    description: 'פרטי לימודים',
  },
];

const StyledStepper = styled(Stepper)(({ theme }) => ({
  direction: 'rtl',
  marginBottom: theme.spacing(4),
  '& .MuiStepLabel-label': {
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: theme.spacing(1),
  },
  '& .MuiStepLabel-label.Mui-active': {
    color: theme.palette.primary.main,
  },
  '& .MuiStepLabel-label.Mui-completed': {
    color: theme.palette.success.main,
  },
  '& .MuiStepConnector-line': {
    borderColor: theme.palette.divider,
  },
  '& .MuiStepConnector-root.Mui-active .MuiStepConnector-line': {
    borderColor: theme.palette.primary.main,
  },
  '& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line': {
    borderColor: theme.palette.success.main,
  },
  '& .MuiStepIcon-root': {
    width: '2rem',
    height: '2rem',
  },
  '& .MuiStepIcon-root.Mui-active': {
    color: theme.palette.primary.main,
  },
  '& .MuiStepIcon-root.Mui-completed': {
    color: theme.palette.success.main,
  },
}));

interface RegistrationStepperProps {
  activeStep: number;
}

const RegistrationStepper: React.FC<RegistrationStepperProps> = ({ activeStep }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <StyledStepper activeStep={activeStep} alternativeLabel>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography variant="body1" component="span">
                {step.label}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'block',
                  color: index === activeStep ? 'primary.main' : 'text.secondary',
                }}
              >
                {step.description}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </StyledStepper>
    </Box>
  );
};

export default RegistrationStepper;

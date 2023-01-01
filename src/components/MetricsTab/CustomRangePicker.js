import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { ThemeProvider } from '@mui/material/styles';

const CustomRangePicker = ({ theme }) => {
  const [value, setValue] = useState(['1/2/2023', '1/5/2023']);

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        localeText={{ start: '', end: '' }}
      >
        <DateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}>-</Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default CustomRangePicker;

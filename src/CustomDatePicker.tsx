import * as React from 'react';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';



interface DatePickerProps {
    dateVal: dayjs.Dayjs | null,
    handleChange: (newValue: Dayjs | null) => void
}

const CustomDatePicker: React.FC<DatePickerProps> = (props: DatePickerProps) => {
  

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
                <DateTimePicker
                    label="Set a Deadline"
                    value={props.dateVal}
                    onChange={props.handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
}

export default CustomDatePicker;
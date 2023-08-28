import React from 'react';
import { FormikContextType, FormikValues, useFormikContext } from 'formik';

import AppTextInput, { AppTextInputProps } from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

interface FormFieldProps extends AppTextInputProps {
    name: string;
}

function AppFormField({name,...otherProps}:FormFieldProps) {
    const {setFieldTouched,handleChange,errors,touched}=useFormikContext();
    return (
        <>
        <AppTextInput
            
              onBlur={()=>setFieldTouched(name)}
              onChangeText={handleChange(name)}
            {...otherProps}
            />
            <ErrorMessage error={errors[name as keyof typeof errors]} visible={touched[name as keyof typeof touched]} />
        </>
    );
}

export default AppFormField;
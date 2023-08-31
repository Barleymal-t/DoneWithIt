import React from 'react';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';

function SubmitButton({title,onPress}:{title:string,onPress?:()=>any}) {
    const {handleSubmit} = useFormikContext()
    return (
        <AppButton
              title="Login"
              onPress={onPress ||handleSubmit}
            />
    );
}

export default SubmitButton;
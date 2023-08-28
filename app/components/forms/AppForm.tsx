import { Formik } from 'formik';
import React from 'react';

function AppForm({children,initialValues,onSubmit,validationSchema}:any) {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >{()=> (
        <>
        {children}
        </>
      )}</Formik>
    );
}

export default AppForm;
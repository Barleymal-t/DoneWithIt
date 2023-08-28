import React from "react";
import { FormikContextType, FormikValues, useFormikContext } from "formik";

import AppPicker, { Category } from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ items, name, placeholder }:any) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={items[name]}
      />
      <ErrorMessage error={errors[name as keyof typeof errors]} visible={touched[name as keyof typeof touched]} />
    </>
  );
}

export default AppFormPicker;

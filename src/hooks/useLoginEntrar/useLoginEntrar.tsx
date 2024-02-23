import { ChangeEvent, useState } from "react";

const types: any = {
  email: {
    regex: /^[\w-]+(\.[\w-]+)*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/,
    message: "Preencha um email válido.",
  },
};

export function useLoginEntrar(type: any) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    if (error) {
      validate(event.target.value);
    }
    setValue(event.target.value);
  }

  function validate(value: any) {
    if (type === false) return true;
    if (value.length === 0) {
      setError("Preencha um valor.");
      return false;
    } else if (types[type] && !types[type].regex.test(value)) {
      setError(types[type].message);
      return false;
    } else {
      setError("");
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    validate: () => validate(value),
    onBlur: () => validate(value),
    error,
  };
}

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const RegisterTextField = ({
  label,
  fieldName,
  register,
  errors,
  type,
  size,
  color,
  variant,
}) => {
  return (
    <TextField
      label={label}
      type={type}
      variant={variant}
      color={color}
      error={Boolean(errors[fieldName])}
      helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
      {...register(fieldName)}
      size={size}
    />
  );
};

export default RegisterTextField;

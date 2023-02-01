import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

const RegisterTextField = ({ label, fieldName, register, errors, type }) => {
  return (
    <Grid item xs={0} sm={6}>
      <TextField
        label={label}
        type={type}
        variant="filled"
        color="warning"
        error={Boolean(errors[fieldName])}
        helperText={errors[fieldName] ? errors[fieldName]?.message : " "}
        {...register(fieldName)}
        size="small"
      />
    </Grid>
  );
};

export default RegisterTextField;

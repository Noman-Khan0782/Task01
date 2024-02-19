import * as Yup from "yup";

export const taxSchema = Yup.object().shape({
  percentInLetter: Yup.string().required("Field is required"),
  percentInNumber: Yup.string().required("Field is required"),
});

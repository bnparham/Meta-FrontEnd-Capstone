import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
    "res-date" : Yup.date().required("Selected date is required"),
    "res-time" : Yup.string().required("Selected time is required"),
    "occasion" : Yup.string().required("Selected ocassion type is required"),
})
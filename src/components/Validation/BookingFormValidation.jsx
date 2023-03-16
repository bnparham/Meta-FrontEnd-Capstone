import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
    "res-date" : Yup.string().required("Selected date is required")
})
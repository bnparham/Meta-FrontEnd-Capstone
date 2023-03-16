import * as Yup from 'yup'

export const formSchema = Yup.object().shape({
    "res-date" : Yup.date().required("Selected date is required"),
    "res-time" : Yup.string().required("Selected time is required"),
    "guests" : Yup.number().max(10,"can not select more than 10 guest").min(1,"can not select   lower than 1 guest").required("Selected guests is required"),
    "occasion" : Yup.string().required("Selected ocassion type is required"),
})
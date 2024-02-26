import * as yup from 'yup';



export const userSchema = yup.object().shape({
    yetkinliklerim : yup.string().required('Bu alan boş bırakılamaz'),
})
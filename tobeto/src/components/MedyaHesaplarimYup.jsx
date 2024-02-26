import * as yup from 'yup';



export const userSchema = yup.object().shape({
    medyaHesaplarim : yup.string().required('Bu alan boş bırakılamaz'),
    site : yup.string().required('Bu alan boş bırakılamaz')
})
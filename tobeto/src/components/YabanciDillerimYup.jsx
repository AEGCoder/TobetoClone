import * as yup from 'yup';



export const userSchema = yup.object().shape({
    yabanciDillerim: yup.object().shape({
        dil: yup.string().required('Lütfen bir dil seçiniz'),
        seviye: yup.string().required('Lütfen bir seviye seçiniz'),
    })
})
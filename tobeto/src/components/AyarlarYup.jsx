import * as yup from "yup";



export const userSchema = yup.object().shape({
    ayarlar: yup.object().shape({
        eskiSifre: yup.string().required("Eski şifre boş bırakılamaz"),
        yeniSifre: yup.string().required("Yeni şifre boş bırakılamaz"),
        yeniSifreTekrar: yup.string().oneOf([yup.ref('yeniSifre'), null], 'Şifreler eşleşmiyor').required("Yeni şifre tekrar boş bırakılamaz"),

    })

})
    

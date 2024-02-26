import * as yup from 'yup';




export const userSchema = yup.object().shape({
    userName : yup.string().required('Kullanıcı adı zorunludur').max(20, 'Kullanıcı adı en fazla 20 karakter olmalıdır'),
    userSurname : yup.string().required('Kullanıcı soyadı zorunludur').max(20, 'Kullanıcı soyadı en fazla 20 karakter olmalıdır'),
    userPhone : yup.string().required('Telefon numarası zorunludur').max(11, 'Telefon numarası 11 haneli olmalıdır').min(11, 'Telefon numarası 11 haneli olmalıdır'),
    email : yup.string().email('Geçerli bir email adresi giriniz').required('Email alanı zorunludur'),
    userBirthDate : yup.string().required('Tarih alanı zorunludur'),
    userTC : yup.string().required('TC kimlik numarası zorunludur').max(11, 'TC kimlik numarası 11 haneli olmalıdır').min(11, 'TC kimlik numarası 11 haneli olmalıdır'),
    userEmail : yup.string().required('Email alanı zorunludur').email('Geçerli bir email adresi giriniz'),
    userCountry : yup.string().required('Ülke alanı zorunludur'),
    userCity : yup.string().required('Şehir alanı zorunludur'),
    userDistrict : yup.string().required('İlçe alanı zorunludur'),
    userStreet : yup.string().required('Sokak alanı zorunludur').max(100, 'Sokak alanı en fazla 100 karakter olmalıdır'),
    userAbout : yup.string().required('Hakkımda alanı zorunludur').max(100, 'Hakkımda alanı en fazla 100 karakter olmalıdır'),
})
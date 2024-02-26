import * as yup from 'yup';


export const userSchema = yup.object().shape({
    kurumAdi : yup.string().required("Kurum adı zorunludur").max(50, "Kurum adı en fazla 50 karakter olabilir").min(3, "Kurum adı en az 3 karakter olabilir"),
    pozisyon : yup.string().required("Pozisyon zorunludur").max(50, "Pozisyon en fazla 50 karakter olabilir").min(3, "Pozisyon en az 3 karakter olabilir"),
    sektor : yup.string().required("Sektör zorunludur").max(50, "Sektör en fazla 50 karakter olabilir").min(3, "Sektör en az 3 karakter olabilir"),
    sehir : yup.string().required("Şehir zorunludur").max(50, "Şehir en fazla 50 karakter olabilir").min(3, "Şehir en az 3 karakter olabilir"),
    isBaslangic : yup.date().required("İşe başlangıç tarihi zorunludur"),
    isBitis : yup.date().required("İş bitiş tarihi zorunludur"),
    isAciklama : yup.string().required("İş açıklaması zorunludur").max(500, "İş açıklaması en fazla 500 karakter olabilir").min(10, "İş açıklaması en az 10 karakter olabilir"),
})
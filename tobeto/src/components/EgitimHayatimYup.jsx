import * as yup from 'yup';


export const userSchema = yup.object().shape({
    eğitimDurumu : yup.string().required("Eğitim durumu zorunludur"),
    universite : yup.string().required("Üniversite zorunludur"),
    bolum : yup.string().required("Bölüm zorunludur"),
    baslangicYil : yup.string().required("Başlangıç yılı zorunludur"),
    mezuniyetYil : yup.string().required("Mezuniyet yılı zorunludur"),
})
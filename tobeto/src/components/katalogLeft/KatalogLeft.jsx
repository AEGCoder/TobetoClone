import React,{useState,useEffect} from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const KatalogLeft = () => {

    const [kategori, setKategori] = useState("");
    const [egitimler, setEgitimler] = useState("");
    const [seviye, setSeviye] = useState("");
    const [konu, setKonu] = useState("");
    const [yazilimDili, setYazilimDili] = useState("");
    
    useEffect(() => {
      console.log(kategori);
    }, [kategori, egitimler, seviye, konu, yazilimDili]);
  
     const handleKategori = (e) => {
      setKategori(e.target.value);
        setEgitimler(e.target.value);
        setSeviye(e.target.value);
        setKonu(e.target.value);
        setYazilimDili(e.target.value);
     }
  

  return (
    <div className='sm:pl-20 pl-2 flex flex-col gap-y-5 items-center'>
        {/* components bir  */}
         <div className="w-[70%]">
              <Accordion sx={{ bgcolor: "#423A4B", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Kategori
                </AccordionSummary>
                <AccordionDetails>
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-x-3">
                  <input  type="radio" name="kategori" id="tumEgitim" value={"Tüm eğitimler"} onChange={handleKategori}
                   />
                 <label htmlFor="tumEgitim">Tüm Eğitimler</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="kategori" id="ucretliEgitim" value={"Ücretli Eğitimler"} onChange={handleKategori}  /> 
                 <label htmlFor="ucretliEgitim">Ücretli Eğitimler</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="kategori" id="ucretsizEgitim" value={"Ücretsiz Eğitimler"} onChange={handleKategori} />
                 <label htmlFor="ucretsizEgitim">Ücretsiz Eğitimler</label>
                  </div>
                </div>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* components iki */}
            <div className="w-[70%]">
              <Accordion sx={{ bgcolor: "#423A4B", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Eğitimler
                </AccordionSummary>
                <AccordionDetails>
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-x-3">
                  <input  type="radio" name="egitimler" id="tumEgitimEgitim" value={"Tüm eğitimler Eğitim"} onChange={handleKategori}
                   />
                 <label htmlFor="tumEgitimEgitim">Tüm Eğitimler</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="egitimler" id="digitalGelisim" value={"Digital Gelisim"} onChange={handleKategori}  /> 
                 <label htmlFor="digitalGelisim">Dijital Gelişim</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="egitimler" id="profesyonelGelisim" value={"Profesyonel Gelisim"} onChange={handleKategori} />
                 <label htmlFor="profesyonelGelisim">Profesyonel Gelişim</label>
                  </div>
                </div>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* components üç */}
            <div className="w-[70%]">
              <Accordion sx={{ bgcolor: "#423A4B", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Seviye
                </AccordionSummary>
                <AccordionDetails>
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-x-3">
                  <input  type="radio" name="seviye" id="tumSeviyeler" value={"Tüm Seviyeler"} onChange={handleKategori}
                   />
                 <label htmlFor="tumSeviyeler">Tüm Seviyeler</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="seviye" id="baslangıc" value={"Başlangıç"} onChange={handleKategori}  /> 
                 <label htmlFor="baslangıc">Başlangıç</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="seviye" id="orta" value={"Orta"} onChange={handleKategori} />
                 <label htmlFor="orta">Orta</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="seviye" id="ileri" value={"İleri"} onChange={handleKategori} />
                 <label htmlFor="ileri">İleri</label>
                  </div>
                </div>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* components dört */}
            <div className="w-[70%]">
              <Accordion sx={{ bgcolor: "#423A4B", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Konu
                </AccordionSummary>
                <AccordionDetails>
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-x-3">
                  <input  type="radio" name="konu" id="c#" value={"C#"} onChange={handleKategori}
                   />
                 <label htmlFor="c#">Tüm Seviyeler</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="konu" id="cesitlilikVeBaslangıc" value={"Çeşitlilik Ve Başlangıç"} onChange={handleKategori}  /> 
                 <label htmlFor="cesitlilikVeBaslangıc">Çeşitlilik Ve Başlangıç</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="konu" id="takimBilinci" value={"Takım Bilinci"} onChange={handleKategori} />
                 <label htmlFor="takimBilinci">Takım Bilinci</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="konu" id="kararVerme" value={"Karar Verme"} onChange={handleKategori} />
                 <label htmlFor="kararVerme">Karar Verme</label>
                  </div>
                </div>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* components beş */}
            <div className="w-[70%]">
              <Accordion sx={{ bgcolor: "#423A4B", color: "#fff" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Yazılım Dili
                </AccordionSummary>
                <AccordionDetails>
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-x-3">
                  <input  type="radio" name="yazilimDili" id="tumDiller" value={"Tüm Diller"} onChange={handleKategori}
                   />
                 <label htmlFor="tumDiller">Tüm Diller</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="yazilimDili" id="aspnet" value={"ASPNET"} onChange={handleKategori}  /> 
                 <label htmlFor="aspnet">ASP .NET</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="yazilimDili" id="react" value={"React"} onChange={handleKategori} />
                 <label htmlFor="react">React</label>
                  </div>
                  <div className="flex items-center gap-x-3">
                  <input type="radio" name="yazilimDili" id="nodejs" value={"Nodejs"} onChange={handleKategori} />
                 <label htmlFor="nodejs">Nodejs</label>
                  </div>
                </div>
                </AccordionDetails>
              </Accordion>
            </div>
            {/* components altı */}

    </div>
  )
}

export default KatalogLeft
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HomeCollapse = () => {
  return (
    <div className="text-white container mx-auto py-10 flex flex-col gap-y-3">
      <Accordion
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#9833FF",
          fontWeight: "semibold",
          fontSize: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#9833FF", color: "white" }}
        >
          Tobeto "Yazılımda Başarı" Testi & Huawei Talent Interview
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "white",
            backgroundColor: "#2F2F2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="w-[70%] sm:text-base text-xs">
            Tobeto"da kendini sürekli değerlendirerek, öğrenim yolculuğunu
            kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin. -
            Ücretsiz sunduğumuz Tobeto "Yazılımda Başarı" Testi ile teknik bilgi
            ve yetkinliklerini kolaylıkla ölç. - Aldığın mesleki eğitimlerin
            sonunda uluslararası geçerliliğe sahip Huawei Talent Interview
            teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.
          </div>
          <div>
            <img
              className="sm:w-32 w-20 sm:h-32 h-20 object-cover rounded-lg"
              src="img/collapse1.png"
              alt=""
            />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#9833FF",
          fontWeight: "semibold",
          fontSize: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#9833FF", color: "white" }}
        >
          Tobeto Kişisel Gelişim Envanteri
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "white",
            backgroundColor: "#2F2F2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="w-[70%] sm:text-base text-xs ">
            Yeni bir meslek. Daha yüksek ücret. Uzaktan çalışma. Hedeflediğin ne
            olursa olsun, hepsine uygun bir yol mutlaka var. Bir sonraki hamleni
            planlamaya başlamadan önce üyelerimize ücretsiz sunduğumuz Tobeto
            Kişisel Gelişim Envanteri'mizi yap, kendin için en uygun kariyer
            alanlarını keşfet.
          </div>
          <div>
            <img
              className="sm:w-32 w-20 sm:h-32 h-20 object-cover rounded-lg"
              src="img/collapse2.png"
              alt=""
            />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#9833FF",
          fontWeight: "semibold",
          fontSize: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#9833FF", color: "white" }}
        >
          Codecademy & Tobeto
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "white",
            backgroundColor: "#2F2F2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="w-[70%] sm:text-base text-xs ">
            Codecademy; 50 milyondan fazla üyesinin yeni teknolojik beceriler
            konusunda meraklanması, projelere imza atması, kariyerini
            geliştirmesine yardımcı olan bir online kodlama eğitimi
            platformudur. Tobeto'nun, gerçek zamanlı, kendi hızında, etkileşimli
            öğrenme ortamıyla öğrenmek daha kolay! Üstelik, Türkçe derslerimiz
            ve öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve
            hızlandırmak için senin yanında!
          </div>
          <div>
            <img
              className="sm:w-32 w-20 sm:h-32 h-20 object-cover rounded-lg"
              src="img/collapse3.png"
              alt=""
            />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#9833FF",
          fontWeight: "semibold",
          fontSize: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#9833FF", color: "white" }}
        >
          Bilgiyi Beceriye Çevirme
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "white",
            backgroundColor: "#2F2F2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="w-[70%] sm:text-base text-xs ">
            Canlı dersler, becerilerini derinleştirebileceğin uygulamalar,
            gerçek senaryoları deneyimleyebileceğin projeler ve mentör desteği
            ile becerilerini geliştir, süreci kendin yönet.
          </div>
          <div>
            <img
              className="sm:w-32 w-20 sm:h-32 h-20 object-cover rounded-lg"
              src="img/collapse4.png"
              alt=""
            />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#9833FF",
          fontWeight: "semibold",
          fontSize: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#9833FF", color: "white" }}
        >
          Doğru İş İle Eşleşme
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "white",
            backgroundColor: "#2F2F2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="w-[70%] sm:text-base text-xs ">
            Uzmanlığın için yeni becerileri kazanmak (reskill) veya yeni bir
            role başlamak (upskill) için gelişim yolculuğunu tamamla, profilini
            güncelle, teknoloji odaklı iş fırsatlarıyla eşleş.
          </div>
          <div>
            <img
              className="sm:w-32 w-20 sm:h-32 h-20 object-cover rounded-lg"
              src="img/collapse5.png"
              alt=""
            />
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          backgroundColor: "#2F2F2F",
          color: "#9833FF",
          fontWeight: "semibold",
          fontSize: "1rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: "#9833FF", color: "white" }}
        >
          Hayat Boyu Öğrenme
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "white",
            backgroundColor: "#2F2F2F",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div className="w-[70%] sm:text-base text-xs ">
            Sürekli öğrenme ve sürdürebilir gelişim için Tobeto topluluğuna
            dahil ol.
          </div>
          <div>
            <img
              className="sm:w-32 w-20 sm:h-32 h-20 object-cover rounded-lg"
              src="img/collapse6.png"
              alt=""
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default HomeCollapse;

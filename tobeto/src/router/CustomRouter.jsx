import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import BizKimiz from "../pages/BizKimiz/BizKimiz";
import Kurumlaricin from "../pages/NelerSunuyoruz/Kurumlaricin";
import Bireylericin from "../pages/NelerSunuyoruz/Bireylericin";
import Katalog from "../pages/Katalog/Katalog";
import Codecademy from "../pages/Codecademy/Codecademy";
import Blog from "../pages/TobetodaBuAy/Blog";
import BasindaBiz from "../pages/TobetodaBuAy/BasindaBiz";
import Takvim from "../pages/TobetodaBuAy/Takvim";
import IstanbulKodluyor from "../pages/TobetodaBuAy/IstanbulKodluyor";
import NotFoundPage from "../pages/NotFound/NotFoundPage";
import GirisPage from "../pages/Giris/GirisPage";
import SifreUnuttumPage from "../pages/SifremiUnuttum/SifreUnuttumPage";
import KayitOlPage from "../pages/KayitOl/KayitOlPage";
import PlatformPage from "../pages/Platform/PlatformPage";
import Egitimlerim from "../pages/Egitimlerim/Egitimlerim";
import Duyurular from "../pages/Duyurular/Duyurular";
import TobetoProfilim from "../pages/TobetoProfilim/TobetoProfilim";
import TobetoDegerlendirmeler from "../pages/TobetoDegerlendirmeler/TobetoDegerlendirmeler";
import TobetoKatalog from "../pages/TobetoKatalog/TobetoKatalog";
import TobetoTakvim from "../pages/TobetoTakvim/TobetoTakvim";
import TobetoIstanbulKodluyor from "../pages/TobetoIstanbulKodluyor/TobetoIstanbulKodluyor";
import ProfilBilgileri from "../pages/ProfilBilgileri/ProfilBilgileri";

export const CustomRouter = [
    {
        path : "/",
        element : <HomePage/>
    },
    {
        path : "/bizkimiz",
        element : <BizKimiz/>
    },
    {
        path : "/kurumlaricin",
        element : <Kurumlaricin/>
    },
    {
        path : "/bireylericin",
        element : <Bireylericin/>
    },
    {
        path : "/katalog",
        element : <Katalog/>
    },
    {
        path : "/codecademy",
        element : <Codecademy/>
    },
    {
        path : "/blog",
        element : <Blog/>
    },
    {
        path : "/basindabiz",
        element : <BasindaBiz/>
    },
    {
        path : "/takvim",
        element : <Takvim/>
    },
    {
        path : "/istanbulkodluyor",
        element : <IstanbulKodluyor/>
    },
    {
        path : "/giris",
        element : <GirisPage/>
    },
    {
        path : "/sifremiunuttum",
        element : <SifreUnuttumPage/>
    },
    {
        path : "/kayitol",
        element : <KayitOlPage/>
    },
    {
        path : "/platform",
        element : <PlatformPage/>
    },
    {
        path : "/egitimlerim",
        element : <Egitimlerim/>
    },
    {
        path : "/duyurular",
        element : <Duyurular/>
    },
    {
        path : "/tobetoprofilim",
        element : <TobetoProfilim/>
    },
    {
        path : "/tobetodegerlendirmeler",
        element : <TobetoDegerlendirmeler/>
    },
    {
        path : "/tobetokatalog",
        element : <TobetoKatalog/>
    },
    {
        path : "/tobetotakvim",
        element : <TobetoTakvim/>
    },
    {
        path : "/tobetoistanbulkodluyor",
        element : <TobetoIstanbulKodluyor/>
    },
    {
        path : "/profilbilgileri",
        element : <ProfilBilgileri/>
    },
    {
        path : "*",
        element : <NotFoundPage/>
    }
]
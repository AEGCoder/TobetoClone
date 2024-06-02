import React from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import { CustomRouter } from "./router/CustomRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {



  return (
    <div>
        <div>
          <ToastContainer />
          <Routes>
            {CustomRouter.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={
                  <div>
                    {/* Banner ve Header sadece NotFoundPage'de gösterilmeyecek */}
                    {item.path !== "*" && item.path !== "/admin" && item.path !== "/admin/catalog/update/:id" && item.path !== "/admin/catalog/create" && item.path !== "/admin/catalog" && item.path !== "/admin/announcement" && item.path !== "/admin/announcement/update/:id" && item.path !== "/admin/users" && item.path !== "/admin/announcement/create" && item.path !== "/admin/educations" && item.path !== "/admin/educations/create" && item.path !== "/admin/educations/update/:id"  && item.path !== "/platform" && item.path !== "/egitimlerim" && item.path !== "/duyurular" && item.path !== "/tobetoprofilim" && item.path !== "/tobetodegerlendirmeler" && item.path !== "/tobetokatalog" && item.path !== "/tobetotakvim" && item.path !== "/tobetoistanbulkodluyor" && item.path !== "/profilbilgileri"  && (
                      <>
                        <Banner />
                        <Header />
                      </>
                    )}
                    {item.element}
                  </div>
                }
              />
            ))}
          </Routes>
        </div>
    </div>
  );
};

export default App;

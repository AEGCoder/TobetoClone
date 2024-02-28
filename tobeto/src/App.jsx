import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "./components/loading/Loading";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import { CustomRouter } from "./router/CustomRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Router>
          <ToastContainer />
          <Routes>
            {CustomRouter.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={
                  <div>
                    {/* Banner ve Header sadece NotFoundPage'de gösterilmeyecek */}
                    {item.path !== "*"  && item.path !== "/platform" && item.path !== "/egitimlerim" && item.path !== "/duyurular" && item.path !== "/tobetoprofilim" && item.path !== "/tobetodegerlendirmeler" && item.path !== "/tobetokatalog" && item.path !== "/tobetotakvim" && item.path !== "/tobetoistanbulkodluyor" && item.path !== "/profilbilgileri"  && (
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
        </Router>
      )}
    </div>
  );
};

export default App;

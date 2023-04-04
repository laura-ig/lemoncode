import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { RMListPage } from "./rm-list";
import { RMDetailPage } from "./rm-detail";

interface CompanyContext {
  company: string;
  changeCompany: (company: string) => void;
}

export const MyCompanyContext = React.createContext<CompanyContext>({
  company: "lemoncode",
  changeCompany: () => {},
});

interface Props {
  children?: React.ReactNode;
}

const MyCompanyProvider: React.FC<Props> = ({children}) => {
  const [company, setCompany] = React.useState("lemoncode");
  return <MyCompanyContext.Provider 
    value={{company, changeCompany: setCompany}}
  >{children}</MyCompanyContext.Provider>
}

export const App = () => {
  return (
    <MyCompanyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/rm-list" element={<RMListPage />} />
          <Route path="/rm-detail/:id" element={<RMDetailPage />} />
        </Routes>
      </Router>
    </MyCompanyProvider>
  );
};

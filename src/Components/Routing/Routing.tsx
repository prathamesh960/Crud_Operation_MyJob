import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJobForm from "../AddJobform";
import AddjobTable from "../AddjobTable";



const Routing = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddJobForm />} />

          <Route path="/ManageJob" element={<AddjobTable />} />
          <Route path="/EditJob" element={<AddJobForm />} />

        </Routes>

      </BrowserRouter>
    </>
  );
};

export default Routing;


import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Indexpage from '../pages/Indexpage/Indexpage';
import Homepage from '../pages/Homepage/Homepage';
import Nopage from '../pages/Nopage/Nopage';
import { mailControllerStore } from '../store/mailControllerStore';
import Sendmailpage from '../pages/Sendmailpage/Sendmailpage';

function Router() {

    const { isMailComposed, isMailSendSuccessfully } = mailControllerStore()

    console.log("mail composed", isMailComposed)
    console.log("mail send success", isMailSendSuccessfully)

    return (
        <Routes>
            <Route path="/" element={<Indexpage />} />
            <Route path='/homepage' element={isMailComposed ? <Sendmailpage /> : <Homepage />} />
            <Route path='/sendmail' element={isMailSendSuccessfully ? <Navigate to={"/"} /> : <Navigate to={"/homepage"} />} />
            <Route path="*" element={<Nopage />} />
        </Routes>
    )
}

export default Router

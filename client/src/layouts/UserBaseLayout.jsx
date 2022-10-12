import React from "react";
import { Footer } from "../components/Footer";
import { UserNavBar } from "../components/user/UserNavBar";

export default function UserBaseLayout(props) {

    return (
        <main>

            {/* header*/}
            <UserNavBar/>
            {/* content*/}
            {props.children}
            {/* footer*/}
            <Footer/>


        </main>
    )
}
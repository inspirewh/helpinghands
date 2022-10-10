import React from "react";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export default function BaseLayout(props) {

    return (
        <main>

            {/* header*/}
            <NavBar/>
            {/* content*/}
            {props.children}
            {/* footer*/}
            <Footer/>


        </main>
    )
}
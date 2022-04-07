import React from "react";

import JoinForm from "./joinForm"

export default function Homepage(props) {

    return (

        <div className="">
            <h1 className="">Cake It !</h1>
            <p>Apprenez comment les mécanismes du marché influent sur les décisions des producteurs face aux circonstances extérieures.</p>

            <JoinForm />

            <button className="btn btn-outline btn-secondary">Tutoriel</button>

        </div>

    );

}
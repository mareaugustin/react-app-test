import React from "react";


export default function GetUrl(){
    const urlGenie = 'http://localhost:8081/genie.json'
    const urlReseau = 'http://localhost:8081/reseau.json'

    return {urlGenie, urlReseau}
}
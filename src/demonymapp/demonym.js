import React from 'react';
import './demonym.css'

export default function Demonym(props) {

    return (
        <div className="demonym">
            A {props.name} comes form {props.country}
        </div>
    )
}
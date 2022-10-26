import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sailboatIndex } from "../api/sailboat";

const SailboatIndex = ({ user, msgAlert}) => {

    const [allSailboats, setAllSailboats] = useState([])

    useEffect(() => {
        sailboatIndex(user)
        .then(res => {
            setAllSailboats(res.data.sailboats)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Sailboat Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allSailboatsJSX = allSailboats.map(sailboat => {
        return(
            <Link to={sailboat._id} key={sailboat._id}>
                <li>Name: {sailboat.name} type: {sailboat.type}</li>
            </Link>
        )
    })

    return <ul>{allSailboatsJSX}</ul>
}

export default SailboatIndex

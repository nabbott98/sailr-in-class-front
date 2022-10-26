import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { sailboatShow, sailboatUpdate, sailboatDelete } from "../api/sailboat";
import SailboatUpdate from "./SailboatUpdate";

const SailboatShow = ({ user, msgAlert}) => {

    const [sailboat, setSailboat] = useState({})

    const { id } = useParams()
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    // const [isDeleteShown, setIsDeleteShown] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        sailboatShow(user, id)
        .then(res => {
            setSailboat(res.data.sailboat)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Show Sailboat Failure' + error,
                variant: 'danger'
            })
        })
    }, [])


    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current sailboat
        // then comma and modify the key to the value you need
        setSailboat({...sailboat, [event.target.name]: event.target.value})
    }

    const handleUpdateSailboat = () => {
        sailboatUpdate(sailboat, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Update Sailboat',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Sailboat Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteSailboat = () => {
        sailboatDelete(user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Delete Sailboat Success',
                variant: 'success'
            })
            navigate('/sailboats')
        })
        // .then(() => {
        //     navigate('/sailboats')
        // })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Delete Sailboat Failure' + error,
                variant: 'danger'
            })
        })
    }

    return(
        <>
            <h3>Name: {sailboat.name}</h3>
            <p>Manufacturer: {sailboat.manufacturer}</p>
            <p>Length: {sailboat.length}</p>
            <p>Beam: {sailboat.beam}</p>
            <p>Hulls: {sailboat.hulls}</p>
            <button onClick={toggleShowUpdate}>Update</button>
            {isUpdateShown && (
                <SailboatUpdate sailboat={sailboat}
                    handleChange={handleChange}
                    handleUpdateSailboat={handleUpdateSailboat}
                />
            )}
            <button onClick={handleDeleteSailboat}>Delete</button>
        </>
    )
}

export default SailboatShow
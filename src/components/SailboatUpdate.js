import react from "react"

const SailboatUpdate = ({ sailboat, handleChange, handleUpdateSailboat}) => {
    return (
        <>
            <input
                type='text'
                value={sailboat.name}
                name='name'
                onChange={handleChange}
            />
            <input
                type='text'
                value={sailboat.type}
                name='type'
                onChange={handleChange}
            />
            <button onClick={handleUpdateSailboat}>Update Sailboat</button>
        </>
    )
}

export default SailboatUpdate
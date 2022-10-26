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
                value={sailboat.manufacturer}
                name='manufacturer'
                onChange={handleChange}
            />
            <input
                type='number'
                value={sailboat.length}
                name='length'
                onChange={handleChange}
            />
            <input
                type='number'
                value={sailboat.beam}
                name='beam'
                onChange={handleChange}
            />
            <input
                type='number'
                value={sailboat.hulls}
                name='hulls'
                onChange={handleChange}
            />
            <button onClick={handleUpdateSailboat}>Update Sailboat</button>
        </>
    )
}

export default SailboatUpdate
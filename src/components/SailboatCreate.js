import React, { useState } from 'react' 
import { sailboatCreate } from '../api/sailboat'

const SailboatCreate = ({ user, msgAlert }) => {

    const defaultSailboat = {
        name: '',
        type: ''
    }

    const [sailboat, setSailboat] = useState(defaultSailboat)

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current sailboat
        // then comma and modify the key to the value you need
        setSailboat({...sailboat, [event.target.name]: event.target.value})
    }

    const handleCreateSailboat = () => {
        sailboatCreate(sailboat, user)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Sailboat',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Create Sailboat Failure' + error,
                variant: 'danger'
            })
        })
    }

    return (
			<>
				<input
					type='text'
					value={sailboat.name}
					name='name'
					onChange={handleChange}
                    placeholder='Name'
				/>
                <input
					type='text'
					value={sailboat.manufacturer}
					name='manufacturer'
					onChange={handleChange}
                    placeholder='Manufacturer'
				/>
                <input
					type='number'
					value={sailboat.length}
					name='length'
					onChange={handleChange}
                    placeholder='Length'
				/>
                <input
					type='number'
					value={sailboat.beam}
					name='beam'
					onChange={handleChange}
                    placeholder='Beam Width'
				/>
				<input
					type='number'
					value={sailboat.hulls}
					name='hulls'
					onChange={handleChange}
                    placeholder='# of Hulls'
				/>
				<button onClick={handleCreateSailboat}>Create Sailboat</button>
			</>
		)
}

export default SailboatCreate
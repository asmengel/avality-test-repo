import {useState, useEffect} from 'react';
import {Box, TextField, Button} from "@mui/material";

const SignUp = () => {
    const [state, setState] = useState({
        fName: '',
        lName: '',
        npi: '',
        street: '',
        city: '',
        stateLocation: '',
        postal: '',
        phone: '',
        email: ''
    });
    const [valid, setValid] = useState(false);

    const handleChange = e => {
        const {name, value} = e.target;
        const numbers = ['npi', 'phone', 'postal'];

        if (numbers.includes(name)) {
            const valid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            if (!valid.includes(Number(value.slice(-1)))) {
                return
            }
        }

        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        const {fName, lName, email, city, npi, phone, postal, stateLocation, street} = state;

        const payload = {
            firstName: fName,
            lastName: lName,
            email,
            phone,
            npi,
            address: {
                city,
                postal,
                state: stateLocation,
                street
            }
        }
        // send payload to api
        // in real word there would be re-routing
        console.log('sent: ', payload)
        setState({
            fName: '',
            lName: '',
            npi: '',
            street: '',
            city: '',
            stateLocation: '',
            postal: '',
            phone: '',
            email: ''
        })
        window.alert('You have successfully signed up.')
    }

    useEffect(() => {
        const handleValidation = () => {
            const {fName, lName, email, city, npi, phone, postal, stateLocation, street} = state;

            if(fName && lName && email && city && npi && phone && postal && stateLocation && street) {
                return setValid(true);
            }
            setValid(false);
        };

        handleValidation();
    }, [state])

    return(
        <>
        <h1 className={'header'}>Sign Up</h1>
        <main className='form-container'>
            <Box className='form' component='form' noValidate autoComplete='off'>
                <h2 className={'row-title spacing'}>Name</h2>
                <div className='names spacing row'>
                    <TextField variant='outlined' label='First Name' value={state.fName} onChange={handleChange} name={'fName'}/>
                    <TextField variant='outlined' label='Last Name' value={state.lName} onChange={handleChange} name={'lName'}/>
                </div>
                <h2 className={'row-title spacing'}>Contact Information</h2>
                <div className='contact spacing row'>
                    <TextField variant='outlined' label='Phone Number' value={state.phone} onChange={handleChange} name={'phone'}/>
                    <TextField variant='outlined' label='Email' value={state.email} onChange={handleChange} name={'email'}/>
                </div>
                <h2 className={'row-title spacing'}>Address</h2>
                <div className='address spacing row'>
                    <TextField variant='outlined' label='Street Address' value={state.street} onChange={handleChange} name={'street'}/>
                    <TextField variant='outlined' label='City' value={state.city} onChange={handleChange} name={'city'}/>
                    <TextField variant='outlined' label='State' value={state.stateLocation} onChange={handleChange} name={'stateLocation'}/>
                    <TextField variant='outlined' label='Postal Code' value={state.postal} onChange={handleChange} name={'postal'} />
                </div>
                <h2 className={'row-title spacing'}>NPI</h2>
                <div className='npi spacing row'>
                    <TextField variant='outlined' label='NPI' value={state.npi} onChange={handleChange} name={'npi'}/>
                </div>
                <div className={'row spacing button-container'}>
                    <Button disabled={!valid} onClick={handleSubmit} variant="contained">Submit</Button>
                </div>
            </Box>
        </main>
        </>
    )
}

export default SignUp;

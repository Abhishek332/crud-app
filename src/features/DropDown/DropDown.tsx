import "./DropDown.scss";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/customReduxHooks";
import { getStates, getSuburb } from "./countrySlice";

const Dropdown = () => {
    const [selectedValue, setSelectedValue] = useState({
        state: "",
        suburb: ""
    }),
        dispatch = useAppDispatch(),
        { states, suburb, status } = useAppSelector(state => state.country);

    const handleChange = (e: any) => {
        if (e.target.name === 'state') dispatch(getSuburb(e.target.value));
        setSelectedValue({ ...selectedValue, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log('Selected Value', selectedValue);
    }, [selectedValue]);

    useEffect(() => {
        dispatch(getStates());
    }, [dispatch])


    return (
        <div className="dropdown-container">
            {
                status === 'pending'
                    ? <img src="spinner.gif" alt="" />
                    : <>
                        <select onChange={handleChange} value={selectedValue.state} name="state">
                            <option value="">Select State</option>
                            {
                                states?.map((state, i) => <option key={`state-${i + 1}`} value={state}>{state}</option>)
                            }
                        </select>
                        <select onChange={handleChange} value={selectedValue.suburb} name="suburb">
                            <option value="">Select Suburb</option>
                            {
                                suburb?.map((suburb, i) => <option key={`suburb-${i + 1}`} value={suburb}>{suburb}</option>)
                            }
                        </select>
                    </>
            }
        </div>
    )
}

export default Dropdown
import "./Venues.scss";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/customReduxHooks";
import { getStates, getSuburb } from "./countrySlice";
import { getVenues } from "./venuesSlice";
import { Table } from "../../components";

const Venues = () => {
    const [selectedValue, setSelectedValue] = useState({
        state: "",
        suburb: ""
    }),
        dispatch = useAppDispatch(),
        { states, suburb, status } = useAppSelector(state => state.country),
        { data: venues, status: venuesStatus } = useAppSelector(state => state.venues);

    const handleChange = (e: any) => {
        setSelectedValue({ ...selectedValue, [e.target.name]: e.target.value })
        switch (e.target.name) {
            case 'state': dispatch(getSuburb(e.target.value)); return;
            case 'suburb': dispatch(getVenues(selectedValue));
        }
    }

    useEffect(() => {
        dispatch(getStates());
    }, [dispatch])

    const venuesData = venues?.data.map((venue: any) => { return { id: venue.id, name: venue.name, category: venue.category } });

    return (
        (status === 'pending' || venuesStatus === 'pending')
            ? <img src="spinner.gif" alt="" className="loader" />
            : <div className="page-container">
                <div className="dropdown-container">
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
                </div>
                <div className="venues-container">
                    {
                        venues
                            ? <Table data={venuesData} />
                            : <p>Select State and Suburb to see venues</p>
                    }
                </div>
            </div>
    )
}

export default Venues;
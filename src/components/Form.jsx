import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Form = () => {
    let [list, setList] = useState( [] )

    let [selectedList, setselectedList] = useState("people")
    let [id, setId] = useState(null)

    const history = useHistory();

    useEffect(() => {
        axios.get("https://swapi.dev/api/")
        .then(response => {
            console.log("response--->", response)
            console.log(Object.keys(response.data))
            setList(Object.keys(response.data))
        })
        .catch(err => {
            console.log("ERROR OCCUR! ALERT!", err)
        })
    }, [])

    const search = (e) => {
        e.preventDefault();
        console.log("submitted!")
        history.push(`/${selectedList}/${id}`)
    }


    return (
        <>
            <div onSubmit = {search} >
                <form>
                    <div className="d-flex p-3 justify-content-between">
                        <label htmlFor=""><h3>Search for:</h3></label>
                        <div className='form-group'>
                            <select onChange = {(e) => {setselectedList(e.target.value)}} className='form-select' name="" id="">
                                {
                                    list.map((categories, i)=>{
                                        return (
                                            <option key = {i} value = {categories}> {categories} </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group d-flex">
                            <label htmlFor="">ID: </label>
                            <input onChange = {(e) => {setId(e.target.value)}} type="number" name="" id="" className="form-control" />
                        </div>
                    <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
import React from 'react'
import { signal } from "@preact/signals-react"
import logo from "./../../assets/img/logo.png"
import search from "./../../assets/img/search.png"
import { useNavigate } from 'react-router-dom'
import "./SearchBox.sass"

const paramSearch = signal("")


const SearchBox: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        navigate(`/items?search=${paramSearch.value}`);

    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        paramSearch.value = event.target.value;
    }

    return (
        <header>
            <img src={logo} alt="Meli logo" />
            <form onSubmit={handleSubmit}>
                <input type="text" name="q" placeholder="Nunca dejes de buscar" onChange={handleChange} />
                <button type="submit">
                    <img src={search} alt="" />
                </button>
            </form>
        </header>
    )
}

export default SearchBox
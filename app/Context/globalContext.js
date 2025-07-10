'use client'
import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import defaultStates from '../utils/defaultStates'
import { debounce } from "lodash";


// Create the empty global obeject context
const GlobalContext = createContext();
const GlobalContextUpdate = createContext();

// Create a provider component
export const GlobalContextProvider = ({ children }) => {

    const [forecast, setForecast] = useState({});
    const [geoCodedList, setGeoCodedList] = useState(defaultStates);
    const [inputValue, setInputValue] = useState('');
    const [activeCityCoords, setActiveCityCoords] = useState([26.8467, 80.9462])
    const [airQuality, setAirQuality] = useState({});
    const [fiveDaysForecast, setFiveDaysForecast] = useState({});
    const [uvIndex, setUvIndex] = useState({});

    // Function to fetch the forecast state
    const fetchForecast = async (lat, lon) => {
        try {
            const response = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
            setForecast(response.data);
        } catch (error) {
            console.error("Error fetching forecast data:", error.message);
        }
    }

    // Function to fetch the air quality state
    const fetchAirQuality = async (lat, lon) => {
        try {
            const response = await axios.get(`/api/pollution?lat=${lat}&lon=${lon}`);
            setAirQuality(response.data);
        } catch (error) {
            console.error("Error fetching air quality data:", error.message);
        }
    }

    // Function to fetch the five days forecast state   
    const fetchFiveDaysForecast = async (lat, lon) => {
        try {
            const response = await axios.get(`/api/fiveday?lat=${lat}&lon=${lon}`);
            setFiveDaysForecast(response.data);
        } catch (error) {
            console.error("Error fetching five day forecast data:", error.message);
        }
    }

    // Function to fetch the Uv index state   
    const fetchUvIndex = async (lat, lon) => {
        try {
            const response = await axios.get(`api/uv?lat=${lat}&lon=${lon}`);
            setUvIndex(response.data);
        } catch (error) {
            console.error("Error fetching uv data:", error.message);
        }
    }

    // Function to fetch the geocoded state   
    const fetchGeoCodedList = async (search) => {
        try {
            const response = await axios.get(`api/geocoded?search=${search}`);
            setGeoCodedList(response.data);
        } catch (error) {
            console.error("Error fetching geocoded data:", error.message);
        }
    }

    // Function to handel userinput  
    const handleInput = async (e) => {
        setInputValue(e.target.value);
        if (e.target.value === "") {
            setGeoCodedList(defaultStates)
        }
    }
    
    
    useEffect(() => {
        fetchForecast(activeCityCoords[0], activeCityCoords[1]);
        fetchAirQuality(activeCityCoords[0], activeCityCoords[1]);
        fetchUvIndex(activeCityCoords[0], activeCityCoords[1]);
        fetchFiveDaysForecast(activeCityCoords[0], activeCityCoords[1]);
    }, [activeCityCoords])
    
    useEffect(() => {
        // debounce function for optimization
        const debouncedFetch = debounce((search) => {
            fetchGeoCodedList(search);
        }, 500);

        if (inputValue) {
            debouncedFetch(inputValue);
        }

        // cleanup
        return () => debouncedFetch.cancel();
    }, [inputValue]);


    return (
        <GlobalContext.Provider
            value={{
                forecast,
                airQuality,
                fiveDaysForecast,
                geoCodedList,
                inputValue,
                handleInput,
                uvIndex,
                setActiveCityCoords,
                setInputValue,
                setGeoCodedList
            }}>
            <GlobalContextUpdate.Provider value={{ setActiveCityCoords }}>
                {children}
            </GlobalContextUpdate.Provider>
        </GlobalContext.Provider>
    )
};


export const useGlobalContext = () => useContext(GlobalContext);
export const useGlobalContextUpdate = () => useContext(GlobalContextUpdate);
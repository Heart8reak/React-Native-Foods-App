import { useEffect, useState } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        console.log('Hola Mundo!')
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'orlando'
            }
        })
        setResults(response.data.businesses)
        } catch (err) {
            console.log(err)
            setErrorMessage('Something went wrong!')
        }
    }

    useEffect(() => {
        searchApi('chicken')
    }, [])

    return [searchApi, results, errorMessage]
}
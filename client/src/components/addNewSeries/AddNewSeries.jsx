import { useNavigate } from 'react-router-dom';

import * as seriesService from '../../services/seriesService';

import './addNewSeries.css'



export default function AddNewSeries() {
    const navigate = useNavigate();
    
    const createSerieSubmitHandler = async (e) => {
        e.preventDefault();

        const seriesData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await seriesService.create(seriesData);

            navigate('/series');
        } catch (err) {
            // Error notification
            console.log(err);
        }
    }
    return(
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createSerieSubmitHandler}>
                <div className="container">
                    <h1>Add New Series</h1>
                    <label htmlFor="leg-title">Title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter series title..." />

                    <label htmlFor="year">Year:</label>
                    <input type="number" id="year" name="year" placeholder="Enter series release year..." />

                    <label htmlFor="genres">Genres:</label>
                    <input type="text" id="genres" name="genres" placeholder="Enter genres..." />

                    <label htmlFor="imageUrl">imageUrl:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="producer">Producer:</label>
                    <input type="text" id="producer" name="producer" placeholder="Enter producer..." />

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description"></textarea>
                    <input className="btn submit" type="submit" value="Create Serie" />
                </div>
            </form>
        </section>
    )
}
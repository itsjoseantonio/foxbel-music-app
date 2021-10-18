import { useState, useEffect } from 'react';
import axios from 'axios';

// Components //
import Menu from './components/layouts/Menu';
import Header from './components/layouts/Header';
import Collections from './components/layouts/Collections';
import Logo from './components/menu/Logo';
import ListMenu from './components/menu/ListMenu';
import SearchBox from './components/SearchBox';
import User from './components/User';
import ItemSong from './components/SongItem';
import Button from './components/Button';
import Player from './components/player';

// Styles //
import styles from './styles/views/Home.module.scss';

import image from './assets/images/avatar.png';

const myLibrary = [
    'Recientes',
    'Artistas',
    'Álbums',
    'Canciones',
    'Estaciones',
];

function App() {
    const [word, setWord] = useState('');

    useEffect(() => {
        const timeOut = setTimeout(() => {
            getTrackAlbum();
        }, 500);

        return () => clearTimeout(timeOut);
    }, [word]);

    const getTrackAlbum = async () => {
        let baseURL = 'https://api.deezer.com/search?q=track:';
        const headers = {
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        };
        const { data } = await axios.get(
            `https://cors-anywhere.herokuapp.com/${baseURL}${word}`
        );
        console.log('Result: ', data);

        try {
        } catch (error) {}
        // fetch(
        //     'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=track:'
        // )
        //     .then((response) => response.json()) // one extra step
        //     .then((data) => {
        //         console.log(data);
        //     })
        //     .catch((error) => console.error(error));
    };

    return (
        <div className="App">
            <div className={styles.container}>
                <Menu>
                    <Logo />
                    <ListMenu title="Mi librería" items={myLibrary} />
                </Menu>
                <main>
                    <Header>
                        <SearchBox word={word} setWord={setWord} />
                        <User name="Francisco M." />
                    </Header>
                    <Collections title="Resultados">
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                        <ItemSong image={image} name="21" artist="Adele" />
                    </Collections>
                    <Player />
                    <Button text="Reproducir" />
                    <Button text="Reproducir" altClass="outline" />
                </main>
            </div>
        </div>
    );
}

export default App;

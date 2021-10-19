import { useState, useEffect, useRef } from 'react';
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
import TopItemSong from './components/TopSongItem';
import Button from './components/Button';
import Player from './components/player';

// Helpers //
import { getByKey } from './utils/Helpers';

// Styles //
import styles from './styles/views/Home.module.scss';

const myLibrary = [
    'Recientes',
    'Artistas',
    'Álbums',
    'Canciones',
    'Estaciones',
];

function App() {
    const [word, setWord] = useState('');
    const [songs, setSongs] = useState(null);
    const [albums, setAlbums] = useState(null);
    const [allData, setAllData] = useState(null);
    const [currentSong, setCurrentSong] = useState(null);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            getTrackAlbum();
        }, 500);

        return () => clearTimeout(timeOut);
    }, [word]);

    const getTrackAlbum = async () => {
        const songsURL = 'https://api.deezer.com/search?q=track:';
        const albumsURL = 'https://api.deezer.com/search?q=album:';

        const requestSongs = axios.get(
            `https://api.allorigins.win/raw?url=${songsURL}${word}`
        );
        const requestAlbums = axios.get(
            `https://api.allorigins.win/raw?url=${albumsURL}${word}`
        );

        await axios.all([requestSongs, requestAlbums]).then(
            axios.spread((...responses) => {
                const { data: songsData } = responses[0];
                const { data: albumsData } = responses[1];

                setSongs(songsData.data);
                setAlbums(albumsData.data);
                setAllData([...songsData.data, ...albumsData.data]);

                console.log(songsData, 'Songsss');
                console.log(albumsData, 'Albumsss');
            })
        );

        try {
        } catch (error) {
            console.log(error);
        }
    };

    const handleItem = (event) => {
        const idSong = event.currentTarget.dataset.id;
        const itemSong = getByKey(allData, idSong);
        setCurrentSong(itemSong);
        console.log(idSong, allData, 'All Data');
        console.log(itemSong);
    };

    return (
        <div className="App">
            <div className={styles.container}>
                <Menu>
                    <Logo />
                    <ListMenu title="Mi librería" items={myLibrary} />
                </Menu>
                <div className={styles.main}>
                    <Header>
                        <SearchBox word={word} setWord={setWord} />
                        <User name="Francisco M." />
                    </Header>
                    <main>
                        {word ? (
                            <>
                                <section className={styles.top} id="top">
                                    {allData && (
                                        <TopItemSong
                                            name={allData[0].title}
                                            artist={allData[0].artist.name}
                                            image={allData[0].album.cover_big}
                                            id={allData[0].id}
                                        >
                                            <Button
                                                text="Reproducir"
                                                data-id="red"
                                            />
                                            <Button
                                                text="Seguir"
                                                altClass="outline"
                                            />
                                        </TopItemSong>
                                    )}
                                </section>
                                <Collections title="Canciones">
                                    {songs &&
                                        songs.map(
                                            (
                                                { id, title, artist, album },
                                                i
                                            ) => (
                                                <ItemSong
                                                    key={i}
                                                    id={id}
                                                    image={album.cover_medium}
                                                    name={title}
                                                    artist={artist.name}
                                                    handleItem={handleItem}
                                                />
                                            )
                                        )}
                                </Collections>
                                <Collections title="Albums">
                                    {albums &&
                                        albums.map(
                                            (
                                                { id, title, artist, album },
                                                i
                                            ) => (
                                                <ItemSong
                                                    key={i}
                                                    id={id}
                                                    image={album.cover_medium}
                                                    name={title}
                                                    artist={artist.name}
                                                    handleItem={handleItem}
                                                />
                                            )
                                        )}
                                </Collections>
                            </>
                        ) : (
                            <>
                                <section className={styles.top} id="top">
                                    {allData && (
                                        <TopItemSong
                                            name={allData[0].title}
                                            artist={allData[0].artist.name}
                                            image={allData[0].album.cover_big}
                                            id={allData[0].id}
                                        >
                                            <Button
                                                text="Reproducir"
                                                data-id="red"
                                            />
                                            <Button
                                                text="Seguir"
                                                altClass="outline"
                                            />
                                        </TopItemSong>
                                    )}
                                </section>
                                <Collections title="Canciones">
                                    {songs &&
                                        songs.map(
                                            (
                                                { id, title, artist, album },
                                                i
                                            ) => (
                                                <ItemSong
                                                    key={id}
                                                    id={id}
                                                    image={album.cover_medium}
                                                    name={title}
                                                    artist={artist.name}
                                                    handleItem={handleItem}
                                                />
                                            )
                                        )}
                                </Collections>
                            </>
                        )}
                        {currentSong && <Player item={currentSong} />}
                    </main>
                </div>
            </div>
        </div>
    );
}

export default App;

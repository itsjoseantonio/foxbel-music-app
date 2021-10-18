import { useState, useEffect } from 'react';

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
    return (
        <div className="App">
            <div className={styles.container}>
                <Menu>
                    <Logo />
                    <ListMenu title="Mi librería" items={myLibrary} />
                </Menu>
                <main>
                    <Header>
                        <SearchBox />
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

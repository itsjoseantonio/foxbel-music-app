import { useState, useEffect } from 'react';

// Components //
import Logo from './components/Logo';
import ListMenu from './components/ListMenu';
import SearchBox from './components/SearchBox';

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
            <Logo />
            <ListMenu title="Mi librería" items={myLibrary} />
            <SearchBox />
        </div>
    );
}

export default App;

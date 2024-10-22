import React from 'react'
import './App.css'
import './components/Noticia'
import  {Grid2}  from '@mui/material';
import Noticia from './components/Noticia';


const App = () => {
  const noticiaData = [
    {
      id: 1,
      title: 'Titulo 1',
      Date: '19 de octubre de 2024',
      imageUrl: 'sky.jpg',
      altText: '',
    },
    {
      id: 2,
      title: 'Titulo 2',
      Date: '19 de octubre de 2024',
      imageUrl: 'sea.jpg',
      altText: '',
    },
    {
      id: 3,
      title: 'Titulo 3 ',
      Date: '19 de octubre de 2024',
      imageUrl: 'tux.jpg',
      altText: '',
    },
    {
      id: 4,
      title: 'Titulo 4',
      Date: '19 de octubre de 2024',
      imageUrl: 'mario.jpg',
      altText: '',
    },
  ];

  return (
    <div>
      <Grid2 container spacing={2} justifyContent="center">
        {noticiaData.map((noticia) => (
          <Grid2 item xs={12} sm={6} md={4} key={noticia.id}>
            <Noticia
              title={noticia.title}
              Date={noticia.Date}
              imageUrl={noticia.imageUrl}
              altText={noticia.altText}
            />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};


export default App;

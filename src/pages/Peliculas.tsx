import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import Card from '../components/Card';
import movies from "../data/movies.json";

type Movie ={
  release_date: string;
  overview: string;
  title: string;
  poster_path: string;
}

const Peliculas: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MOVIES</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">PELICULAS</IonTitle>
          </IonToolbar>
        </IonHeader>
        {movies?.map((movie: Movie, index: number) => (
          <Card
            key={index}
            poster = {movie.poster_path}
            title={movie.title}
            content={movie.overview}
            subtitle={movie.release_date}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Peliculas;
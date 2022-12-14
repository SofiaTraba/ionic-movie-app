import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Contenedor from '../components/Contenedor';
import HomeContainer from '../components/HomeContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">HOME</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;

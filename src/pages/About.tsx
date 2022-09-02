import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Contenedor from '../components/Contenedor';
import './Home.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>ABOUT</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">T</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Contenedor name="Las pelis de Sofía" />
      </IonContent>
    </IonPage>
  );
};

export default About;

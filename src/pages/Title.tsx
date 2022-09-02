import { IonContent, IonHeader, IonLabel , IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import {useLocation} from "react-router-dom"


const Title: React.FC = () => {
    const location = useLocation();
    const state:any= location.state;
    var title = "";
    if (state != undefined) {
        title = state.title
    }
    return (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>TITULOS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">TITULOS</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>EL TITULO DE ESTA PELICULA ES:</IonCardSubtitle>
          <IonCardTitle>
            {title}
          </IonCardTitle>
        </IonCardHeader>
      </IonCard>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Title;
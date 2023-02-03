import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC<{ initialContext: any }> = ({ initialContext }) => {
  return (
    <IonPage>
      {initialContext.showToolbar === true ? (
        <IonHeader>
          <IonToolbar>
            <IonTitle>Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      ) : null}
      <IonContent fullscreen>
        {initialContext.showToolbar === true ? (
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
        ) : null}
        <ExploreContainer initialContext={initialContext} />
      </IonContent>
    </IonPage>
  );
};

export default Home;

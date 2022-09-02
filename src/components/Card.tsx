import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonItem,
  IonImg,
} from "@ionic/react";
import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export type CardProps = {
  title: string;
  subtitle: string;
  content: string;
  poster: string;
};

export default function Card({
  title,
  subtitle,
  content,
  poster,
}: CardProps): ReactElement {
  return (
    <IonCard>
      <IonItem class="img">
        <Link
          to={{
            pathname: "/title",
            state: {title},
          }}
        >
          <IonImg
            class="img"
            src={"https://image.tmdb.org/t/p/w185" + poster}
          ></IonImg>
        </Link>
      </IonItem>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>{content}</IonCardContent>
    </IonCard>
  );
}

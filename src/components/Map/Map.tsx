"use client"
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import pinIcon from "../../../public/images/pin.png";


const Map = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const L = require("leaflet");

      if (!mapRef.current) {
        const map = L.map("map").setView([47.48501, 19.06222], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);

        // Створення маркер-іконки
        const customMarkerIcon = L.icon({
          iconUrl: pinIcon.src,
          iconSize: [32, 32], // Розмір іконки
          iconAnchor: [16, 32], // Анкорна точка для позиціонування іконки
        });

        // Додаємо точку на карту
        const marker = L.marker([47.48501, 19.06222], {
          icon: customMarkerIcon,
        }).addTo(map);
        marker.bindPopup("<b>Forever yang</b><br>Мы играем здеесь.").openPopup();

        mapRef.current = map;
      }
    }
  }, []);

  return <div id="map" className=" w-[518px] h-[218px]" />;
};

export default Map;

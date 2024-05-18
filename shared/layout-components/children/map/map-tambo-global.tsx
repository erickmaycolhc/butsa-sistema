"use client"

import { GoogleMap, useLoadScript, MarkerF, InfoWindow, useJsApiLoader, Polyline, CircleF, InfoBoxF, InfoBox, InfoWindowF } from "@react-google-maps/api";
import { useCallback, useEffect, useState } from "react";
import { Coordinates, Tienda } from "@/interfaces/map/map";
import { Button, Card, Image } from "react-bootstrap";
import Link from "next/link";
import iconTambo from "@/public/assets/img/icon-tambo.png";

const arrayStoresTambo: Tienda[] = [
    {
        id: "1",
        name: "Colegio puruchuco",
        direction: "Colegio puruchuco direction",
        schedule: {
            open: "si",
            close: "no",
        },
        district: "ate",
        days_attention: "aaaa",
        coordinate: {
            lat: -12.048145725677461,
            lng: -76.92997049611327,
        },
    },
    {
        id: "2",
        name: "Josfel",
        direction: "Josfel direction",
        schedule: {
            open: "si",
            close: "no",
        },
        district: "ate",
        days_attention: "aaaa",
        coordinate: {
            lat: -12.04299666628209,
            lng: -76.93720795269172,
        },
    }
]

export default function MapTamboGlobal() {
    const [map, setMap] = useState(null)
    const [marker, setMarker] = useState<{ tienda: Tienda, zoom: number } | null>(null)
    // const { marker, setMarker } = useMarkerGlobalContext();
    const [currentLocation, setCurrentLocation] = useState<Coordinates | null>();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    });

    useEffect(() => {
        setCurrentLocation({
            lat: -12.04162099899184,
            lng: -76.93126739288518,
        })
        // let position = navigator.geolocation.getCurrentPosition(
        //     onActualizacionDeUbicacion,
        //     onErrorDeUbicacion,
        //     opcionesDeSolicitud
        // );
    }, []);

    // const onActualizacionDeUbicacion = (ubicacion: GeolocationPosition) => {
    //     const coordenadas = ubicacion.coords;
    //     let { latitude, longitude } = coordenadas;
    //     setCurrentLocation({
    //         lat: latitude,
    //         lng: longitude,
    //     });
    // };

    // const onErrorDeUbicacion = (err: any) => {
    //     //alert("Para poder usar el sistema por favor habilite la ubicación")
    //     console.log("Error obteniendo ubicación: ", err);
    // };
    // const opcionesDeSolicitud = {
    //     enableHighAccuracy: true,
    //     maximumAge: 0,
    //     timeout: 5000,
    // };

    const mapOptions: any = {
        disableDefaultUI: true,
        gestureHandling: "greedy", //  gestureHandling: se utiliza para controlar cómo se manejan los gestos en el mapa.
    };

    const handleActiveMarker = (markerTmp: Tienda) => {
        console.log("markerTmp ==> " + markerTmp)
        if (markerTmp === marker?.tienda) {
            return;
        }
        setMarker({
            tienda: markerTmp,
            zoom: 16,
        });
    };

    /*const onLoad = useCallback(function callback(map: any) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])*/

    const handleOnLoad = (map: any) => {
        const bounds = new google.maps.LatLngBounds();
        arrayStoresTambo.forEach((tienda) => bounds.extend(tienda.coordinate));
        map.fitBounds(bounds);
    };


    if (!isLoaded) return <div>Loading...</div>;
    if (currentLocation === null) return <section>
        <p>No se habilito el uso del gps</p>
    </section>
    return (
        <>
            <GoogleMap
                onLoad={handleOnLoad}
                center={currentLocation}
                options={mapOptions}
                zoom={16}
                onClick={() => setMarker(null)}
                mapContainerClassName="map-container">
                <MarkerF
                    position={currentLocation}></MarkerF>
                {/* {[1000, 2500].map((radius, idx) => {
                    return (
                        <CircleF
                            key={idx}
                            center={currentLocation}
                            radius={radius}
                            onLoad={() => console.log('Circle Load...')}
                            options={{
                                fillColor: radius > 1000 ? 'red' : 'green',
                                strokeColor: radius > 1000 ? 'red' : 'green',
                                strokeOpacity: 0.8,
                            }}
                        />
                    );
                })} */}
                {
                    arrayStoresTambo.map((tienda) => {
                        return (
                            <MarkerF
                                key={tienda.id}
                                position={tienda.coordinate}
                                label={tienda.name}
                                onMouseOver={() => console.log("taylor ==> " + tienda.name)}
                                icon={{
                                    url: iconTambo.src,
                                    scaledSize: new window.google.maps.Size(30, 30),
                                }}
                                onClick={() => handleActiveMarker(tienda)}>
                                {
                                    (marker && marker.tienda === tienda) &&
                                    <InfoWindowF >
                                        <div className="eapps-google-maps-marker">
                                            <div className="eapps-google-maps-marker-close" eapps-link="close" onClick={() => setMarker(null)}>
                                                <svg width="8" height="8" viewBox="0 0 14 14">
                                                    <path transform="translate(-18 -13)" d="M32 14.4L30.6 13 25 18.6 19.4 13 18 14.4l5.6 5.6-5.6 5.6 1.4 1.4 5.6-5.6 5.6 5.6 1.4-1.4-5.6-5.6z"></path>
                                                </svg>
                                            </div>

                                            <div className="eapps-google-maps-marker-header">

                                                <div className="eapps-google-maps-marker-image">
                                                    <Image
                                                        width={200}
                                                        alt="The Metropolitan Museum of Art"
                                                        srcSet="https://files.elfsightcdn.com/86d592a4-fc00-4d16-9b84-0566a28d5645/643b8c96-fa13-4629-90c3-757dbabae43f/fifthave_teaser--1-.jpg"
                                                    />
                                                </div>
                                            </div>

                                            <div className="eapps-google-maps-marker-title-wrapper">
                                                <span className="eapps-google-maps-marker-title">{tienda.name}</span>


                                                <div className="eapps-google-maps-marker-directions">
                                                    <Link
                                                        className="eapps-google-maps-marker-directions-button"
                                                        title="Directions"
                                                        href={"https://www.google.com/maps/dir/?api=1&destination=" + [tienda.coordinate.lat, tienda.coordinate.lng].join(",")}
                                                        target="_blank"
                                                        rel="nofollow"
                                                        eapps-link="directions">
                                                        <span className="eapps-google-maps-marker-directions-label">
                                                            Directions
                                                        </span>

                                                        <span className="eapps-google-maps-marker-directions-icon">
                                                            <svg width="20px" height="20px" viewBox="0 0 510 510">
                                                                <g>
                                                                    <g id="directions">
                                                                        <path d="M502.35,237.149l-229.5-229.5l0,0c-10.199-10.2-25.5-10.2-35.7,0l-229.5,229.5c-10.2,10.2-10.2,25.501,0,35.7l229.5,229.5
                                    l0,0c10.2,10.2,25.501,10.2,35.7,0l229.5-229.5C512.55,262.65,512.55,247.35,502.35,237.149z M306,318.75V255H204v76.5h-51v-102
                                         c0-15.3,10.2-25.5,25.5-25.5H306v-63.75l89.25,89.25L306,318.75z"></path>
                                                                    </g>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </Link>
                                                </div>

                                            </div>

                                            <div className="eapps-google-maps-marker-content">
                                                <div className="eapps-google-maps-marker-info">

                                                    <div className="eapps-google-maps-marker-info-item-address eapps-google-maps-marker-info-item">
                                                        <div className="eapps-google-maps-marker-info-item-icon-wrapper">
                                                            <svg className="eapps-google-maps-marker-info-item-icon" width="12px" height="12px" viewBox="0 0 510 510">
                                                                <path d="M255,0C155.55,0,76.5,79.05,76.5,178.5C76.5,311.1,255,510,255,510s178.5-198.9,178.5-331.5C433.5,79.05,354.45,0,255,0zM255,242.25c-35.7,0-63.75-28.05-63.75-63.75s28.05-63.75,63.75-63.75s63.75,28.05,63.75,63.75S290.7,242.25,255,242.25z"></path>
                                                            </svg>
                                                        </div>

                                                        <span className="eapps-google-maps-marker-info-item-text" title="1000 5th Ave, New York, NY 10028, USA">
                                                            {JSON.stringify(tienda.coordinate)}</span>
                                                    </div>



                                                    <div className="eapps-google-maps-marker-info-item-site eapps-google-maps-marker-info-item">
                                                        <div className="eapps-google-maps-marker-info-item-icon-wrapper">
                                                            <svg className="eapps-google-maps-marker-info-item-icon" width="12px" height="12px" viewBox="0 0 510 510">
                                                                <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M229.5,456.45C130.05,443.7,51,357,51,255c0-15.3,2.55-30.6,5.1-45.9l122.4,122.4V357c0,28.05,22.95,51,51,51V456.45z M405.45,392.7C397.8,372.3,379.95,357,357,357h-25.5v-76.5c0-15.3-10.2-25.5-25.5-25.5H153v-51h51c15.3,0,25.5-10.2,25.5-25.5v-51h51c28.05,0,51-22.95,51-51V66.3C405.45,96.9,459,170.85,459,255C459,308.55,438.6,357,405.45,392.7z"></path>
                                                            </svg>
                                                        </div>

                                                        <span className="eapps-google-maps-marker-info-item-text"><a href="https://www.metmuseum.org/" target="_blank" rel="nofollow">
                                                            www.metmuseum.org/</a></span>
                                                    </div>



                                                    <div className="eapps-google-maps-marker-info-item-phone eapps-google-maps-marker-info-item">
                                                        <div className="eapps-google-maps-marker-info-item-icon-wrapper">
                                                            <svg className="eapps-google-maps-marker-info-item-icon" width="12px" height="12px" viewBox="0 0 510 510">
                                                                <path d="M91.8,198.9c35.7,71.4,96.9,130.05,168.3,168.3L316.2,311.1c7.649-7.649,17.85-10.199,25.5-5.1c28.05,10.2,58.649,15.3,91.8,15.3c15.3,0,25.5,10.2,25.5,25.5v86.7c0,15.3-10.2,25.5-25.5,25.5C193.8,459,0,265.2,0,25.5C0,10.2,10.2,0,25.5,0h89.25c15.3,0,25.5,10.2,25.5,25.5c0,30.6,5.1,61.2,15.3,91.8c2.55,7.65,0,17.85-5.1,25.5L91.8,198.9z"></path>
                                                            </svg>
                                                        </div>

                                                        <span className="eapps-google-maps-marker-info-item-text"><a href="tel:+1 212-535-7710" rel="nofollow">+1 212-535-7710</a></span>
                                                    </div>





                                                    <div className="eapps-google-maps-marker-info-item-working-hours eapps-google-maps-marker-info-item">
                                                        <div className="eapps-google-maps-marker-info-item-icon-wrapper">
                                                            <svg className="eapps-google-maps-marker-info-item-icon" width="12px" height="12px" viewBox="0 0 510 510">
                                                                <path d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0zM255,459c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"></path>
                                                                <polygon points="267.75,127.5 229.5,127.5 229.5,280.5 362.1,362.1 382.5,328.95 267.75,260.1"></polygon>
                                                            </svg>
                                                        </div>

                                                        <span className="eapps-google-maps-marker-info-item-text">
                                                            10AM–5PM</span>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </InfoWindowF>
                                }
                            </MarkerF>
                        )
                    })
                }

            </GoogleMap>
        </>
    )
}
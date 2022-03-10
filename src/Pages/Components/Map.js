/*global kakao*/
import React, { useEffect } from "react";



const Map = () => {
    useEffect(()=> {
        // 지도를 표시할 div
        const container = document.getElementById('map');
        const options = {
          //  LatLng() 안에 파라미터는 위도와 경도
          center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
          //  지도의 확대 레벨
          level: 3
        };

        // 지도를 생성
        const map = new kakao.maps.Map(container, options);
        const markerPosition = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488);
        const marker = new kakao.maps.Marker({
            position: markerPosition
        });
        // marker 표시
        marker.setMap(map);
        }, [])

    return (
        <div>
            <div id="map" style={{ width:"100%", height:"500px" }}></div>
        </div>
    )
}

export default Map;
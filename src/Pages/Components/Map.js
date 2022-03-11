/*global kakao*/
import React, { useEffect } from "react";



const Map = () => {
    useEffect(()=> {
        // 지도를 표시할 div
        const container = document.getElementById('map');
        const options = {
          //  LatLng() 안에 파라미터는 위도와 경도
          center: new kakao.maps.LatLng(37.56667, 126.97806),
          //  지도의 확대 레벨
          level: 3
        };

        // 지도를 생성
        const map = new kakao.maps.Map(container, options);

        // # geolocation 을사용할 수 있는지 Check
        if (navigator.geolocation) {
            // GeoLocation을 이용해서 접속 위치를 얻어옵니다
            navigator.geolocation.getCurrentPosition(function (position) {

                // 위도, 경도
                var lat = position.coords.latitude, lon = position.coords.longitude;

                // geolocation으로 얻어온 좌표로 생성합니다
                var locPosition = new kakao.maps.LatLng(lat, lon);

                // locPosition 으로 포커싱 해줍니다.
                map.setCenter(locPosition);
            });
        }


    }, [])
    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    return (
        <div>
            <div id="map" style={{ width:"100%", height:"500px" }}></div>
        </div>
    )
}

export default Map;
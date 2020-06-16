import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SensorModal from "./components/SensorModal";
import { VerticalSpacer } from "./components/StyledComponents";

function App() {
  const serverSocket = new WebSocket("ws://localhost:5000/");
  const [humidity, setHumidity] = useState();
  const [pm10, setPm10] = useState({});
  const [pm25, setPm25] = useState({});
  const [pressure, setPressure] = useState({});
  const [temperature, setTemperature] = useState({});
  const [wind, setWind] = useState({});

  useEffect(() => {
    serverSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      switch (data.name) {
        case "Humidity":
          setHumidity(data);
          break;
        case "PM10":
          setPm10(data);
          break;
        case "PM2.5":
          setPm25(data);
          break;
        case "Pressure":
          setPressure(data);
          break;
        case "Temperature":
          setTemperature(data);
          break;
        case "Wind":
          setWind(data);
          break;
        default:
          alert("Uknown server side indicator.");
          break;
      }
    };
    return () => serverSocket.close();
  }, []);

  function handleConnection(resourceId, currentState) {
    serverSocket.send(
      JSON.stringify({
        command: currentState ? "disconnect" : "connect",
        id: resourceId,
      })
    );
    switch (resourceId) {
      case "0":
        currentState &&
          setTemperature({ ...temperature, connected: !currentState });
        break;
      case "1":
        currentState && setPressure({ ...pressure, connected: !currentState });
        break;
      case "2":
        currentState && setHumidity({ ...humidity, connected: !currentState });
        break;
      case "3":
        currentState && setPm25({ ...pm25, connected: !currentState });
        break;
      case "4":
        currentState && setPm10({ ...pm10, connected: !currentState });
        break;
      case "5":
        currentState && setWind({ ...wind, connected: !currentState });
        break;
      default:
        return;
    }
  }

  return (
    <div className="App">
      <VerticalSpacer size={3} />
      <Row>
        <Col
          lg={{ span: 3, offset: 1 }}
          md={{ span: 3, offset: 1 }}
          sm={{ span: 3, offset: 1 }}
          xs={{ span: 3, offset: 0 }}
        >
          {humidity && (
            <SensorModal
              title="Humidity"
              resourceId={humidity.id}
              connected={humidity.connected}
              handleConnection={handleConnection}
              value={humidity.value}
              unit={humidity.unit}
            ></SensorModal>
          )}
        </Col>
        <Col
          lg={{ span: 3, offset: 0 }}
          md={{ span: 3, offset: 1 }}
          sm={{ span: 3, offset: 1 }}
          xs={{ span: 3, offset: 0 }}
        >
          {pressure && (
            <SensorModal
              title="Pressure"
              resourceId={pressure.id}
              connected={pressure.connected}
              handleConnection={handleConnection}
              value={pressure.value}
              unit={pressure.unit}
            ></SensorModal>
          )}
        </Col>
        <Col
          lg={{ span: 3, offset: 0 }}
          md={{ span: 3, offset: 1 }}
          sm={{ span: 3, offset: 1 }}
          xs={{ span: 3, offset: 0 }}
        >
          {wind && (
            <SensorModal
              title="Wind"
              resourceId={wind.id}
              connected={wind.connected}
              handleConnection={handleConnection}
              value={wind.value}
              unit={wind.unit}
            ></SensorModal>
          )}
        </Col>
      </Row>
      <VerticalSpacer size={4} />
      <Row>
        <Col
          lg={{ span: 3, offset: 1 }}
          md={{ span: 3, offset: 1 }}
          sm={{ span: 3, offset: 1 }}
          xs={{ span: 3, offset: 0 }}
        >
          {temperature && (
            <SensorModal
              title="Temperature"
              resourceId={temperature.id}
              connected={temperature.connected}
              handleConnection={handleConnection}
              value={temperature.value}
              unit={temperature.unit}
            ></SensorModal>
          )}
        </Col>
        <Col
          lg={{ span: 3, offset: 0 }}
          md={{ span: 3, offset: 1 }}
          sm={{ span: 3, offset: 1 }}
          xs={{ span: 3, offset: 0 }}
        >
          {pm25 && (
            <SensorModal
              title="PM2.5"
              resourceId={pm25.id}
              connected={pm25.connected}
              handleConnection={handleConnection}
              value={pm25.value}
              unit={pm25.unit}
            ></SensorModal>
          )}
        </Col>
        <Col
          lg={{ span: 3, offset: 0 }}
          md={{ span: 3, offset: 1 }}
          sm={{ span: 3, offset: 1 }}
          xs={{ span: 3, offset: 0 }}
        >
          {pm10 && (
            <SensorModal
              title="PM10"
              resourceId={pm10.id}
              connected={pm10.connected}
              handleConnection={handleConnection}
              value={pm10.value}
              unit={pm10.unit}
            ></SensorModal>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default App;

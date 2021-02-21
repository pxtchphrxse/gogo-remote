import mqtt, { IClientOptions } from "mqtt";

const brokerUrl: string = "ws://message-broker.gogoboard.org:8083/mqtt";

const prefix: string = "GoGoBoard/BroadcastT";
const defaultPayload: string = "gogoBroadcastMQTT!@LILCMU";
const channel: string = "0";

const options: IClientOptions = {
  reconnectPeriod: 2500,
  protocol: "ws",
};

export const initialState: MqttStateProps = {
  client: mqtt.connect(brokerUrl, options),
  prefix,
  defaultPayload,
  channel,
};

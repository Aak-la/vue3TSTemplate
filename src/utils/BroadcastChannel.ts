import { v4 as uuidv4 } from "uuid";
interface channelType {
  name: string;
  id?: any;
  onmessage: any;
  onmessageerror: any;
  listener?: any;
}
class postman {
  public createdChannel(name: string) {
    const channel: channelType = new BroadcastChannel(name);
    return channel;
  }
  public sendMsg(msg: any, channel: any) {
    channel.postMessage({
      id: channel.id,
      msg,
    });
  }
}
export default new postman();

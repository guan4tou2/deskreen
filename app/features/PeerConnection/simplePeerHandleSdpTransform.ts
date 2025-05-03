/* eslint-disable @typescript-eslint/no-explicit-any */
import setSdpMediaBitrate from './setSdpMediaBitrate';

export default (sdp: any) => {
  let newSDP = sdp;
  newSDP = setSdpMediaBitrate(newSDP as string, 'video', 2000000) as typeof sdp;
  return newSDP;
};

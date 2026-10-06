import { ImageResponse } from "next/og";

export const alt = "Webghost — protocol engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between", width:"100%", height:"100%", padding:64, background:"#08090a", color:"#f2f4f5", fontFamily:"sans-serif" }}><div style={{ display:"flex", justifyContent:"space-between", color:"#b7a9ff", fontSize:22, letterSpacing:4 }}><span>WG/ WEBGHOST</span><span>LAGOS NG / PROTOCOL ENGINEER</span></div><div style={{ display:"flex", flexDirection:"column", fontSize:94, fontWeight:700, lineHeight:.9, letterSpacing:-7 }}><span>BUILDING SYSTEMS</span><span style={{ color:"#b7a9ff" }}>THAT PROVE</span><span>BEFORE THEY TRUST.</span></div><div style={{ color:"#92989f", fontSize:24 }}>PROTOCOL ENGINEERING · PRIVACY · AUTONOMOUS SYSTEMS</div></div>, size);
}

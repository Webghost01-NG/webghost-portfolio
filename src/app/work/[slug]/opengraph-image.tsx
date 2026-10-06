import { ImageResponse } from "next/og";
import { getProject } from "@/content/portfolio";

export const alt = "Webghost engineering project";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return new ImageResponse(<div style={{ display:"flex", flexDirection:"column", justifyContent:"space-between", width:"100%", height:"100%", padding:64, background:"#08090a", color:"#f2f4f5", fontFamily:"sans-serif" }}><div style={{ display:"flex", justifyContent:"space-between", color:"#b7a9ff", fontSize:22, letterSpacing:4 }}><span>WG/ WEBGHOST</span><span>{project?.classification ?? "ENGINEERING"}</span></div><div style={{ display:"flex", flexDirection:"column", gap:18 }}><div style={{ fontSize:118, fontWeight:700, letterSpacing:-8 }}>{project?.name ?? "PROJECT"}</div><div style={{ color:"#92989f", fontSize:28 }}>{project?.category ?? "Protocol engineering"}</div></div><div style={{ color:"#5e646b", fontSize:20 }}>PROTOCOL ENGINEERING · PRIVACY · SYSTEMS</div></div>, size);
}

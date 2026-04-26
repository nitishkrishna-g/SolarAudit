import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 32,
                    height: 32,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0f172a",
                    borderRadius: 7,
                }}
            >
                {/* Sun */}
                <div
                    style={{
                        position: "absolute",
                        top: 3,
                        left: "50%",
                        marginLeft: -7,
                        width: 14,
                        height: 14,
                        borderRadius: "50%",
                        background: "radial-gradient(circle at 40% 40%, #FFE566 0%, #FFC107 50%, #FF8C00 100%)",
                        boxShadow: "0 0 5px 2px rgba(255,193,7,0.5)",
                    }}
                />
                {/* Panel */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 4,
                        left: 3,
                        right: 3,
                        height: 11,
                        borderRadius: 2,
                        background: "linear-gradient(to bottom, #A0B4C8 0%, #7C91A6 100%)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}
                >
                    <div style={{ display: "flex", flex: 1, borderBottom: "1px solid #5B7A93" }}>
                        <div style={{ flex: 1, borderRight: "1px solid #5B7A93" }} />
                        <div style={{ flex: 1 }} />
                    </div>
                    <div style={{ display: "flex", flex: 1 }}>
                        <div style={{ flex: 1, borderRight: "1px solid #5B7A93" }} />
                        <div style={{ flex: 1 }} />
                    </div>
                    <div style={{ height: 2, background: "#4A6880" }} />
                </div>
            </div>
        ),
        { ...size }
    );
}

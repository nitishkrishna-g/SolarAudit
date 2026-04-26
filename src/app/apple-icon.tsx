import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: 180,
                    height: 180,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#0f172a",
                    borderRadius: 36,
                }}
            >
                {/* Sun circle */}
                <div
                    style={{
                        position: "absolute",
                        top: 14,
                        left: "50%",
                        marginLeft: -38,
                        width: 76,
                        height: 76,
                        borderRadius: "50%",
                        background: "radial-gradient(circle at 40% 40%, #FFE566 0%, #FFC107 40%, #FF8C00 75%, #E65100 100%)",
                        boxShadow: "0 0 28px 8px rgba(255,193,7,0.45)",
                    }}
                />

                {/* Sun rays — 8 lines radiating outward */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top: 52 - 18,
                            left: 90 - 2,
                            width: 4,
                            height: 16,
                            borderRadius: 2,
                            background: "#FFC107",
                            transformOrigin: "2px 18px",
                            transform: `rotate(${deg}deg)`,
                            opacity: deg > 135 && deg < 315 ? 0 : 1,
                        }}
                    />
                ))}

                {/* Solar panel body */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 22,
                        left: 14,
                        right: 14,
                        height: 58,
                        borderRadius: 8,
                        background: "linear-gradient(to bottom, #A0B4C8 0%, #7C91A6 100%)",
                        display: "flex",
                        flexDirection: "column",
                        overflow: "hidden",
                    }}
                >
                    {/* Top row of cells */}
                    <div style={{ display: "flex", flex: 1, borderBottom: "2px solid #5B7A93" }}>
                        <div style={{ flex: 1, borderRight: "2px solid #5B7A93" }} />
                        <div style={{ flex: 1, borderRight: "2px solid #5B7A93" }} />
                        <div style={{ flex: 1 }} />
                    </div>
                    {/* Bottom row of cells */}
                    <div style={{ display: "flex", flex: 1 }}>
                        <div style={{ flex: 1, borderRight: "2px solid #5B7A93" }} />
                        <div style={{ flex: 1, borderRight: "2px solid #5B7A93" }} />
                        <div style={{ flex: 1 }} />
                    </div>
                    {/* 3D bottom edge */}
                    <div
                        style={{
                            height: 9,
                            background: "#4A6880",
                            borderRadius: "0 0 8px 8px",
                        }}
                    />
                </div>
            </div>
        ),
        { ...size }
    );
}

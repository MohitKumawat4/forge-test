"use client";

import { useEffect, useRef, useState } from "react";
import { Color, Fog, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

// Default constants
const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

// Type definitions
type Position = {
    order: number;
    startLat: number;
    startLng: number;
    endLat: number;
    endLng: number;
    arcAlt: number;
    color: string;
};

export type GlobeConfig = {
    pointSize?: number;
    globeColor?: string;
    showAtmosphere?: boolean;
    atmosphereColor?: string;
    atmosphereAltitude?: number;
    emissive?: string;
    emissiveIntensity?: number;
    shininess?: number;
    polygonColor?: string;
    ambientLight?: string;
    directionalLeftLight?: string;
    directionalTopLight?: string;
    pointLight?: string;
    arcTime?: number;
    arcLength?: number;
    rings?: number;
    maxRings?: number;
    initialPosition?: {
        lat: number;
        lng: number;
    };
    autoRotate?: boolean;
    autoRotateSpeed?: number;
};

interface WorldProps {
    globeConfig: GlobeConfig;
    data: Position[];
}

// Default globe configuration
let numbersOfRings = [0];

// Globe component that handles the 3D rendering
function Globe({ globeConfig, data }: WorldProps) {
    const [globeData, setGlobeData] = useState<
        | {
            size: number;
            order: number;
            color: (t: number) => string;
            lat: number;
            lng: number;
        }[]
        | null
    >(null);

    const [isMaterialReady, setIsMaterialReady] = useState(false);

    // Create a stable ThreeGlobe instance
    const globeInstance = useRef(new ThreeGlobe()).current;

    const defaultProps = {
        pointSize: 1,
        atmosphereColor: "#ffffff",
        showAtmosphere: true,
        atmosphereAltitude: 0.1,
        polygonColor: "rgba(255,255,255,0.7)",
        globeColor: "#1d072e",
        emissive: "#000000",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        arcTime: 2000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        ...globeConfig,
    };

    // Initialize globe material when ready
    useEffect(() => {
        const checkAndSetMaterial = () => {
            try {
                const globeMaterial = globeInstance.globeMaterial();
                if (globeMaterial && globeMaterial.opacity !== undefined) {
                    const material = globeMaterial as unknown as {
                        color: Color;
                        emissive: Color;
                        emissiveIntensity: number;
                        shininess: number;
                    };
                    material.color = new Color(globeConfig.globeColor || "#1d072e");
                    material.emissive = new Color(globeConfig.emissive || "#000000");
                    material.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
                    material.shininess = globeConfig.shininess || 0.9;
                    setIsMaterialReady(true);
                    return true;
                }
                return false;
            } catch (e) {
                return false;
            }
        };

        // Try immediately
        if (!checkAndSetMaterial()) {
            // If not ready, poll until ready (max 5 seconds)
            let attempts = 0;
            const maxAttempts = 10;
            const interval = setInterval(() => {
                attempts++;
                if (checkAndSetMaterial() || attempts >= maxAttempts) {
                    clearInterval(interval);
                }
            }, 500);

            return () => clearInterval(interval);
        }
    }, [globeConfig]);

    // Initialize globe data
    useEffect(() => {
        _buildData();
    }, []);

    const _buildData = () => {
        const arcs = data;
        const points: {
            size: number;
            order: number;
            color: (t: number) => string;
            lat: number;
            lng: number;
        }[] = [];

        for (let i = 0; i < arcs.length; i++) {
            const arc = arcs[i];
            const rgb = hexToRgb(arc.color);
            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                lat: arc.startLat,
                lng: arc.startLng,
            });
            points.push({
                size: defaultProps.pointSize,
                order: arc.order,
                color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
                lat: arc.endLat,
                lng: arc.endLng,
            });
        }

        // Remove duplicates
        const filteredPoints = points.filter(
            (v, i, a) =>
                a.findIndex((v2) =>
                    ["lat", "lng"].every(
                        (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"]
                    )
                ) === i
        );

        setGlobeData(filteredPoints);
    };


    useEffect(() => {
        if (globeData) {
            try {
                globeInstance
                    .hexPolygonsData(countries.features)
                    .hexPolygonResolution(3)
                    .hexPolygonMargin(0.7)
                    .showAtmosphere(defaultProps.showAtmosphere)
                    .atmosphereColor(defaultProps.atmosphereColor)
                    .atmosphereAltitude(defaultProps.atmosphereAltitude)
                    .hexPolygonColor(() => {
                        return defaultProps.polygonColor;
                    });
                startAnimation();
            } catch (e) {
                console.warn("Globe initialization error:", e);
            }
        }
    }, [globeData]);

    const startAnimation = () => {
        if (!globeData) return;

        globeInstance
            .arcsData(data)
            .arcStartLat((d) => (d as { startLat: number }).startLat * 1)
            .arcStartLng((d) => (d as { startLng: number }).startLng * 1)
            .arcEndLat((d) => (d as { endLat: number }).endLat * 1)
            .arcEndLng((d) => (d as { endLng: number }).endLng * 1)
            .arcColor((e: unknown) => (e as { color: string }).color)
            .arcAltitude((e) => {
                return (e as { arcAlt: number }).arcAlt * 1;
            })
            .arcStroke(() => {
                return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
            })
            .arcDashLength(defaultProps.arcLength)
            .arcDashInitialGap(0)  // Start immediately, no initial gap
            .arcDashGap(0.5)       // Small gap for continuous flowing lines
            .arcDashAnimateTime(() => defaultProps.arcTime);

        globeInstance
            .pointsData(globeData)
            .pointColor((e) => (e as { color: string }).color)
            .pointsMerge(true)
            .pointAltitude(0.0)
            .pointRadius(2);

        globeInstance
            .ringsData([])
            .ringColor((e: unknown) => (t: number) => e as string)
            .ringMaxRadius(defaultProps.maxRings)
            .ringPropagationSpeed(RING_PROPAGATION_SPEED)
            .ringRepeatPeriod(
                (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings
            );
    };

    useEffect(() => {
        if (!globeData) return;

        const interval = setInterval(() => {
            numbersOfRings = genRandomNumbers(
                0,
                data.length,
                Math.floor((data.length * 4) / 5)
            );

            globeInstance.ringsData(
                globeData.filter((d, i) => numbersOfRings.includes(i))
            );
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [globeData]);

    return (
        <primitive object={globeInstance} />
    );
}

// World component with camera and controls
export function World(props: WorldProps) {
    const { globeConfig } = props;
    const scene = useThree((state) => state.scene);

    useEffect(() => {
        if (!scene) return;
        scene.fog = new Fog(0xffffff, 400, 2000);
    }, [scene]);

    return (
        <>
            <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
            <directionalLight
                color={globeConfig.directionalLeftLight}
                position={new Vector3(-400, 100, 400)}
            />
            <directionalLight
                color={globeConfig.directionalTopLight}
                position={new Vector3(-200, 500, 200)}
            />
            <pointLight
                color={globeConfig.pointLight}
                position={new Vector3(-200, 500, 200)}
                intensity={0.8}
            />
            <Globe {...props} />
            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minDistance={cameraZ}
                maxDistance={cameraZ}
                autoRotateSpeed={globeConfig.autoRotateSpeed || 1}
                autoRotate={globeConfig.autoRotate}
                minPolarAngle={Math.PI / 3.5}
                maxPolarAngle={Math.PI - Math.PI / 3}
            />
        </>
    );
}

// Main component wrapper
export function GlobeDemo({
    className = "",
    globeConfig,
    data,
}: {
    className?: string;
    globeConfig?: Partial<GlobeConfig>;
    data?: Position[];
}) {
    const defaultGlobeConfig: GlobeConfig = {
        pointSize: 4,
        globeColor: "#062056",
        showAtmosphere: true,
        atmosphereColor: "#FFFFFF",
        atmosphereAltitude: 0.1,
        emissive: "#062056",
        emissiveIntensity: 0.1,
        shininess: 0.9,
        polygonColor: "rgba(255,255,255,0.7)",
        ambientLight: "#38bdf8",
        directionalLeftLight: "#ffffff",
        directionalTopLight: "#ffffff",
        pointLight: "#ffffff",
        arcTime: 1000,
        arcLength: 0.9,
        rings: 1,
        maxRings: 3,
        initialPosition: { lat: 22.3193, lng: 114.1694 },
        autoRotate: true,
        autoRotateSpeed: 0.5,
        ...globeConfig,
    };

    const defaultData: Position[] = [
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -22.9068,
            endLng: -43.1729,
            arcAlt: 0.1,
            color: "#06b6d4",
        },
        {
            order: 1,
            startLat: 28.6139,
            startLng: 77.209,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.2,
            color: "#3b82f6",
        },
        {
            order: 1,
            startLat: -19.885592,
            startLng: -43.951191,
            endLat: -1.303396,
            endLng: 36.852443,
            arcAlt: 0.5,
            color: "#06b6d4",
        },
        {
            order: 2,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: 35.6762,
            endLng: 139.6503,
            arcAlt: 0.2,
            color: "#3b82f6",
        },
        {
            order: 2,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 3.139,
            endLng: 101.6869,
            arcAlt: 0.3,
            color: "#06b6d4",
        },
        {
            order: 2,
            startLat: -15.785493,
            startLng: -47.909029,
            endLat: 36.162809,
            endLng: -115.119411,
            arcAlt: 0.3,
            color: "#3b82f6",
        },
        {
            order: 3,
            startLat: -33.8688,
            startLng: 151.2093,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.3,
            color: "#06b6d4",
        },
        {
            order: 3,
            startLat: 21.3099,
            startLng: -157.8581,
            endLat: 40.7128,
            endLng: -74.006,
            arcAlt: 0.3,
            color: "#3b82f6",
        },
        {
            order: 3,
            startLat: -6.2088,
            startLng: 106.8456,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: "#06b6d4",
        },
        {
            order: 4,
            startLat: 11.986597,
            startLng: 8.571831,
            endLat: -15.595412,
            endLng: -56.05918,
            arcAlt: 0.5,
            color: "#3b82f6",
        },
        {
            order: 4,
            startLat: -34.6037,
            startLng: -58.3816,
            endLat: 22.3193,
            endLng: 114.1694,
            arcAlt: 0.7,
            color: "#06b6d4",
        },
        {
            order: 4,
            startLat: 51.5072,
            startLng: -0.1276,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.1,
            color: "#3b82f6",
        },
        {
            order: 5,
            startLat: 14.5995,
            startLng: 120.9842,
            endLat: 51.5072,
            endLng: -0.1276,
            arcAlt: 0.3,
            color: "#06b6d4",
        },
        {
            order: 5,
            startLat: 1.3521,
            startLng: 103.8198,
            endLat: -33.8688,
            endLng: 151.2093,
            arcAlt: 0.2,
            color: "#3b82f6",
        },
        {
            order: 5,
            startLat: 34.0522,
            startLng: -118.2437,
            endLat: 48.8566,
            endLng: -2.3522,
            arcAlt: 0.2,
            color: "#06b6d4",
        },
    ];

    return (
        <div
            className={`w-full h-full flex items-center justify-center ${className}`}
        >
            <Canvas
                camera={{
                    position: [0, 0, cameraZ],
                    fov: 50,
                    near: 180,
                    far: 1800,
                }}
                style={{ width: '100%', height: '100%' }}
            >
                <World globeConfig={defaultGlobeConfig} data={data || defaultData} />
            </Canvas>
        </div>
    );
}

// Utility functions
export function hexToRgb(hex: string) {
    // Validate input is a string
    if (!hex || typeof hex !== 'string') {
        return { r: 255, g: 255, b: 255 }; // Default to white
    }

    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : { r: 255, g: 255, b: 255 }; // Default to white if parsing fails
}

export function genRandomNumbers(min: number, max: number, count: number) {
    const arr = [];
    while (arr.length < count) {
        const r = Math.floor(Math.random() * (max - min)) + min;
        if (arr.indexOf(r) === -1) arr.push(r);
    }

    return arr;
}

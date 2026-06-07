import { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { geoIdentity } from 'd3-geo';
import './Map.css';

export default function Map ({ countyData = [] }) {
    const OREGON_TOPO_JSON = '/or-counties.json';
    const BIVARIATE_COLORS = {
        "1-1": "#E8E8E8", "1-2": "#B5C0DA", "1-3": "#6C83B5", // Var A Low
        "2-1": "#E4ACAC", "2-2": "#B38AA4", "2-3": "#6B6B9F", // Var A Med
        "3-1": "#B30000", "3-2": "#8B0000", "3-3": "#4B0000", // Var A High
    }

    const filler = () => {
        const a = 2;
    }

    const width = 800;
    const height = 500;

    const customProjection = geoIdentity().reflectY(true);

    return (
        <div>
            <ComposableMap
                projection={customProjection}
                width={width}
                height={height}>
                <Geographies geography={OREGON_TOPO_JSON}>
                    {({ geographies }) => {
                        if (geographies && geographies.length > 0) {
                            customProjection.fitSize([width, height], {
                                type: "FeatureCollection",
                                features: geographies
                            });
                        }

                        return geographies.map((geo) => {
                            let countyName = "";
                            if (geo && geo.properties) {
                                countyName = geo.properties.altName || geo.properties.instName || "";
                            }

                            const countyStats = countyData.find((d) => {
                                if (!d || !d.COUNTY_NAME || !countyName) {
                                    return false;
                                }
                                return d.COUNTY_NAME.toLowerCase().trim() === countyName.toLowerCase().trim();
                            });

                            let fillColor = '#F5F5F6';
                            if (countyStats) {
                                const colorKey = `${countyStats.bucket_A}-${countyStats.bucket_B}`;
                                fillColor = BIVARIATE_COLORS[colorKey] || '#F5F5F6';
                            }

                            return (
                                <Geography 
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={filler}
                                    onMouseLeave={filler}
                                    onClick={() => console.log("mouse click", countyName)}
                                    style={{
                                        default: {
                                            fill: fillColor,
                                            stroke: '#FFF', 
                                            strokeWidth: 0.75,
                                            outline: 'none',
                                            transition: 'all 250ms',
                                        },
                                        hover: {
                                            fill: "#FFD700", 
                                            stroke: '#333',
                                            strokeWidth: 1.5,
                                            outline: 'none',
                                            cursor: 'pointer',
                                        },
                                        pressed: {
                                            fill: '#E6C200',
                                            outline: 'none',
                                        },
                                    }}
                                />
                            )
                        })
                    }}
                </Geographies>
            </ComposableMap>
        </div>
    )
}
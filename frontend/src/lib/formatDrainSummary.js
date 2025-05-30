import {
    boxAbbreviations,
    domeAbbreviations,
    ringAbbreviations,
    coatingAbbreviations,
    sealAbbreviations
} from './abbreviations';

// Ripping this out of the OrderSummary.jsx file

export function formatDrainSummary(drainData) {

    const parts = []; // Array to hold the formatted parts

    if (drainData.total) parts.push(drainData.total); // Quantity
    if (drainData.box) parts.push(boxAbbreviations[drainData.box] || drainData.box); // Box
    if (drainData.size) parts.push(drainData.size); // Drain Size
    if (drainData.coatings) parts.push(coatingAbbreviations[drainData.coatings] || drainData.coatings); // Coatings
    if (drainData.seal) parts.push(sealAbbreviations[drainData.seal] || drainData.seal); // Seal
    if (drainData.dome) parts.push(domeAbbreviations[drainData.dome] || drainData.dome); // Dome
    if (drainData.ring) parts.push(ringAbbreviations[drainData.ring] || drainData.ring); // Ring

    return parts.join(' '); // Concatenate the parts
}
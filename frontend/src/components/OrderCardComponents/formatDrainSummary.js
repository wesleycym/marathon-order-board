import {
    boxAbbreviations,
    domeAbbreviations,
    ringAbbreviations,
    coatingAbbreviations,
    sealAbbreviations
} from '../lib/abbreviations';

// Ripping this out of the OrderSummary.jsx file

export function formatDrainSummary(drainData) {
    const parts = [];

    if (drainData.total) parts.push(drainData.total); // Quantity
    if (drainData.box) parts.push(boxAbbreviations[drainData.box] || drainData.box);
    if (drainData.size) parts.push(drainData.size);
    if (drainData.coatings) parts.push(coatingAbbreviations[drainData.coatings] || drainData.coatings);
    if (drainData.seal) parts.push(sealAbbreviations[drainData.seal] || drainData.seal);
    if (drainData.dome) parts.push(domeAbbreviations[drainData.dome] || drainData.dome);
    if (drainData.ring) parts.push(ringAbbreviations[drainData.ring] || drainData.ring);

    return parts.join(' ');
}
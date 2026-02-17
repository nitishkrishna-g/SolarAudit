export const STATE_TARIFFS = {
  "TamilNadu": { "name": "TANGEDCO", "slabs": [[100, 0], [200, 4.95], [500, 9.95], [1000, 11.05]], "fixed": 0 },
  "Karnataka": { "name": "BESCOM", "slabs": [[100, 4.75], [200, 6.50], [1000, 8.50]], "fixed": 100 },
  "Maharashtra": { "name": "MSEDCL", "slabs": [[100, 5.50], [300, 9.80], [500, 12.50], [1000, 15.50]], "fixed": 115 },
  "Delhi": { "name": "BYPL", "slabs": [[200, 3.00], [400, 4.50], [800, 6.50], [1200, 8.00]], "fixed": 150 }
} as const;

export type StateName = keyof typeof STATE_TARIFFS;

export const INDIAN_SUBSIDY = {
  upto2kW: 30000, // Per kW
  step3rdkW: 18000, // Flat for the 3rd kW
  maxSubsidy: 78000 // Fixed max
};

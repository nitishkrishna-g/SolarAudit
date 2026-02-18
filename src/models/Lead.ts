import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
    {
        name: String,
        phone: String,
        city: String,
        state: String,
        billAmount: Number,
        roofOwnership: String, // "Owned" | "Rented"
        roofArea: Number, // sq ft
        createdAt: { type: Date, default: Date.now },
    },
    { strict: false }
);

// Prevent OverwriteModelError
const Lead = mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

export default Lead;

export function Footer() {
    return (
        <footer className="border-t border-border-color bg-surface py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="text-text-secondary text-sm">
                    &copy; {new Date().getFullYear()} SolarAudit. All rights reserved.
                </p>
                <p className="text-text-secondary text-xs mt-2">
                    Data sourced from MNRE, DISCOMs, and State Nodal Agencies.
                </p>
            </div>
        </footer>
    );
}

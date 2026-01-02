/**
 * StrataScratch Automator (URL Only Version - Clean Filename)
 * Extracts Problem ID and Title from the URL and removes 'SS-' prefix.
 */

module.exports = {
    entry: async (params) => {
        const { quickAddApi } = params;

        // 1. Prompt for URL only
        const urlInput = await quickAddApi.inputPrompt("Enter StrataScratch Problem URL:");
        if (!urlInput) return;

        try {
            const urlObj = new URL(urlInput);
            const pathParts = urlObj.pathname.split('/');
            
            // Extract the slug (e.g., "10299-finding-updated-records")
            const slug = pathParts.find(part => /^\d+-/.test(part)) || pathParts[pathParts.length - 1];
            
            if (!slug || !slug.includes('-')) {
                throw new Error("Invalid slug.");
            }

            const parts = slug.split('-');
            const id = parts[0]; // "10299"
            const rawTitle = parts.slice(1).join(' '); // "finding updated records"
            
            // Format to Title Case
            const title = rawTitle.replace(/\b\w/g, char => char.toUpperCase());

            // 2. Set Variables for Template
            // Removed 'SS-' from the fileName format
            params.variables = {
                id: id,
                title: title,
                link: urlInput,
                difficulty: "See Website",
                tag: "SQL",
                fileName: `${id}. ${title}` // Result: "10299. Finding Updated Records"
            };
        } catch (error) {
            console.error(error);
            new Notice("Error parsing URL. Please check the link format.", 5000);
        }
    }
};

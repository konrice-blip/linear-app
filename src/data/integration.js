export const cardIntegrate = [
    {
        slug: "github",
        title: "GitHub",
        icon: "/github-icon.png",
        shortDescription: "Connect GitHub to automate PR workflows, review code in Linear, sync issues and understand your codebase with Linear Agent"
    },
    {
        slug: "slack",
        title: "Slack",
        icon: "/slack-icon.png",
        shortDescription: "Create issues from Slack messages and sync threads"
    },
    {
        slug: "gitlab",
        title: "GitLab",
        icon: "/git-lab-icon.png",
        shortDescription: "Automate your Merge Request workflow"
    }, 
    {
        slug: "figma",
        title: "Figma",
        icon: "/figma-icon.png",
        smallIcon: "/figma-small-icon.png",
        shortDescription: "Create and link issues directly from Figma",
        photoPreview: "/figma-preview-1.png",
        photos: [
        "/figma-preview-1.png",
        "/figma-preview-2.png",
        "/figma-preview-3.png"
        ],
        tagline: "Streamline work across design and engineering with the Figma plugin for Linear",
        overview:
        "Streamline design and development with integrated tooling for Figma. Install the Linear plugin for Figma to create and link issues to designs. You can also enable embedded previews of your designs in Linear issues and documents.",
        sections: [
        {
            id: "plugin",
            title: "Linear plugin for Figma",
            content: [
            "Run the Linear plugin to see all Linear issues linked to your design in Figma. You can link individual frames, sections, and pages to existing Linear issues or create new issues directly from the canvas.",
            "Selecting an issue takes you to the linked design and shows you key issues details related to it, letting you navigate designs in context and understand the current state of work. From the plugin, mark issues done or assign issues to team members when designs are ready for development. When an issue changes status in Linear, it is synced across to the plugin on Figma instantly."
            ],
            configure:
            "Anyone with a Linear account can install and run the plugin from Figma under Resources > Plugins > Linear (also available under Plugins in Dev Mode). If you do not have a Linear account, you will not be able to access the plugin."
        },
        {
            id: "embeds",
            title: "Embed Figma Previews",
            content: [
            "Embedding Figma files into Linear issues is simple - just paste a Figma link into Linear’s Markdown editor. The app will turn the link into an embed that shows the Figma file name along with an image snapshot of what the file looked like at the moment that you embedded it. When viewing an embed, click on the image to preview the file in Linear or on the file or canvas name to open it in Figma."
            ],
            configure:
            "A Linear admin can go to settings to connect your organization’s Figma account to Linear. Once enabled, the integration will work for everyone in your workspace when they paste a Figma link."
        }],
        sidebar: {
            by: "Linear",
            website: "figma.com",
            categories: ["Media & Design", "Linear crafted", "Essentials"],
            docsLabel: "Figma Docs",
            docsLink: "https://linear.app/docs/figma",
            contactEmail: "support@linear.app"
        }
    },
    {
        slug: "intercom",
        title: "Intercom",
        icon: "/intercom-icon.png",
        shortDescription: "Keep a tight feedback loop with customers and streamline bug reports"
    },
    {
        slug: "googleSheets",
        title: "Google Sheets",
        icon: "/google-sheets-icon.png",
        shortDescription: "Build custom dashboards and analytics from issue and project data"
    }
]

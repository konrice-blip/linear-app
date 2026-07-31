# Technical Assessment Linear App Project

 **Live Demo:** [https://linear-app-phi.vercel.app/](https://linear-app-phi.vercel.app/)
---
##  Tech Stack & Languages
* **Framework:** Next.js
* **Library:** React
* **Languages:** JavaScript, HTML5, CSS Modules
---
# Project Structure

```
/
├── public/
│   ├── figma-icon.png
│   ├── figma-preview-1.png
│   ├── figma-preview-2.png
│   ├── figma-preview-3.png
│   ├── figma-small-icon.png
│   ├── git-lab-icon.png
│   ├── github-icon.png
│   ├── google-sheets-icon.png
│   ├── intercom-icon.png
│   ├── linear-icon.png
│   ├── linear-logo.png
│   └── slack-icon.png
├── src/
│   ├── app/
│   │   ├── [slug]/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── Homepage.module.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── BuildInt/
│   │   │   ├── BuildInt.js
│   │   │   └── BuildInt.module.css
│   │   ├── Card/
│   │   │   ├── Card.js
│   │   │   └── Card.module.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.module.css
│   │   └── Navbar/
│   │       ├── Navbar.js
│   │       └── Navbar.module.css
│   └── data/
│       └── integration.js
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
└── README.md
```

---

## Tested Devices & Screen Sizes

* **Desktop / Laptop:** 1024px and above (default)
* **Tablet:** Around 768px (e.g. iPad Mini portrait)
* **Small tablet / large phone:** Around 650px
* **Mobile:** Up to 480px
* **Small mobile:** tested at 402×564 and 300×500 (iPhone 12-range and smaller)

---

## Known Issues / Unfinished Parts

* On smaller mobile screen sizes, the navbar shifts slightly to the right, causing the "Sign Up" button to get cut off.
* On the official site, scrolling through the image preview in the Figma details section scrolls the tagline along with it. However, this is not yet implemented in my version.
* The complex grid background pattern in the Build Integration section was too complicated to recreate within the time frame.

---

## AI Usage & Contributions

### AI Assistance

* It helped debug and identify syntax errors, missing semicolons, and typos when the codebase grew large and complex. In addition, it also helped in troubleshooting Git network push issues.
* It also assisted in understanding and setting up Next.js App Router dynamic routes (`[slug]`), as well as implementing `'use client'` and React hooks like `useRef` for component interactivity (e.g., in the Build Integration component).
* It also helped me guide through the implementation of CSS `clamp()`, media queries, complex Flexbox/Grid layouts, and a `useEffect` hook for the Build Integration component. AI also assisted with the "By Linear" verified badge implementation.

### Personal Contributions & Review

I wrote the HTML structure, defined custom class names (excluding the Build Integration page), and meticulously matched the original styling by taking screenshots of the official site and using color picker tools to get exact hex values. I made sure that small details, such as the font-sizes, font-family, and widths and heights of the cards were evenly matched. I also added little modifications, such as some ease transitions on the hover states on every link, card, and button elements. I also arranged the Data Integration in Figma Details, the Card Page, and the Footer, converging them to arrays for easier import of information, making the code not as long/complex and much easier to read.

Having only started learning everything about three months ago, tackling React and Next.js was definitely a challenge, although React has started to become my favorite... but working through this assessment was really fun and made me learn so much through the process. I hope to learn even more in Samahan SysDev! :D

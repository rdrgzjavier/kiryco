/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slatecopy: "#334155",
        paper: "#fcf8fa",
        line: "#e2e8f0",
        panel: "#ffffff",
        soft: "#f8f9fa",
        muted: "#64748b",
        petrol: "#1f4e5f",
        coral: "#b85b4f",
        sage: "#5f7c6a"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 4px 12px rgba(15, 23, 42, 0.05)"
      }
    },
  },
  plugins: [],
};

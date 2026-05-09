/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#5B4DFF",
        lavender: "#ECE9FF",
        slatecopy: "#171717",
        paper: "#F7F5F2",
        line: "#E8E5E1",
        panel: "#ffffff",
        soft: "#F3F1ED",
        muted: "#5F6368",
        petrol: "#356D8A",
        coral: "#FF7A59",
        sage: "#8ED8C6"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 40px rgba(23, 23, 23, 0.08)",
        lift: "0 24px 70px rgba(91, 77, 255, 0.16)"
      }
    },
  },
  plugins: [],
};

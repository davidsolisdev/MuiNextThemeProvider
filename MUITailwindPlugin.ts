import plugin from "tailwindcss/plugin";

const colors = {
  primary: "var(--primary)",
  secondary: "var(--secondary)",
  info: "var(--info)",
  success: "var(--success)",
  warning: "var(--warning)",
  error: "var(--error)",
  divider: "var(--divider)",
  "text-primary": "var(--text-primary)",
  "text-secondary": "var(--text-secondary)",
  "text-disabled": "var(--text-disabled)",
  "background-default": "var(--background-default)",
  "background-paper": "var(--background-paper)",
  "primary-dark": "var(--primary-dark)",
  "secondary-dark": "var(--secondary-dark)",
  "info-dark": "var(--info-dark)",
  "success-dark": "var(--success-dark)",
  "warning-dark": "var(--warning-dark)",
  "error-dark": "var(--error-dark)",
  "divider-dark": "var(--divider-dark)",
  "text-primary-dark": "var(--text-primary-dark)",
  "text-secondary-dark": "var(--text-secondary-dark)",
  "text-disabled-dark": "var(--text-disabled-dark)",
  "background-default-dark": "var(--background-default-dark)",
  "background-paper-dark": "var(--background-paper-dark)",
};

plugin(({ addUtilities }) =>
  addUtilities({
    "text-p": {
      fontFamily: "var(--paragraph)",
      fontWeight: "var(--body1-font-weight)",
      fontSize: "var(--body1-font-size)",
      lineHeight: "var(--body1-line-height)",
    },
    "text-h1": {
      fontFamily: "var(--titles)",
      fontWeight: "var(--h1-font-weight)",
      fontSize: "var(--h1-font-size)",
      lineHeight: "var(--h1-line-height)",
    },
    "text-h2": {
      fontFamily: "var(--titles)",
      fontWeight: "var(--h2-font-weight)",
      fontSize: "var(--h2-font-size)",
      lineHeight: "var(--h2-line-height)",
    },
    "text-h3": {
      fontFamily: "var(--titles)",
      fontWeight: "var(--h3-font-weight)",
      fontSize: "var(--h3-font-size)",
      lineHeight: "var(--h3-line-height)",
    },
    "text-h4": {
      fontFamily: "var(--titles)",
      fontWeight: "var(--h4-font-weight)",
      fontSize: "var(--h4-font-size)",
      lineHeight: "var(--h4-line-height)",
    },
    "text-h5": {
      fontFamily: "var(--titles)",
      fontWeight: "var(--h5-font-weight)",
      fontSize: " var(--h5-font-size)",
      lineHeight: "var(--h5-line-height)",
    },
    "text-h6": {
      fontFamily: "var(--titles)",
      fontWeight: "var(--h6-font-weight)",
      fontSize: "var(--h6-font-size)",
      lineHeight: "var(--h6-line-height)",
    },
    "text-subtitle1": {
      fontFamily: "var(--subtitles)",
      fontWeight: "var(--subtitle1-font-weight)",
      fontSize: "var(--subtitle1-font-size)",
      lineHeight: "var(--subtitle1-line-height)",
    },
    "text-subtitle2": {
      fontFamily: "var(--subtitles)",
      fontWeight: "var(--subtitle2-font-weight)",
      fontSize: "var(--subtitle2-font-size)",
      lineHeight: "var(--subtitle2-line-height)",
    },
    "text-body1": {
      fontFamily: "var(--paragraph)",
      fontWeight: "var(--body1-font-weight)",
      fontSize: "var(--body1-font-size)",
      lineHeight: "var(--body1-line-height)",
    },
    "text-body2": {
      fontFamily: "var(--paragraph)",
      fontWeight: "var(--body2-font-weight)",
      fontSize: "var(--body2-font-size)",
      lineHeight: "var(--body2-line-height)",
    },
    "text-button": {
      fontFamily: "var(--button)",
      fontWeight: "var(--button-font-weight)",
      fontSize: "var(--button-font-size)",
      lineHeight: "var(--button-line-height)",
    },
    "text-caption": {
      fontFamily: "var(--caption)",
      fontWeight: "var(--caption-font-weight)",
      fontSize: "var(--caption-font-size)",
      lineHeight: "var(--caption-line-height)",
    },
    "text-overline": {
      fontFamily: "var(--paragraph)",
      fontWeight: "var(--overline-font-weight)",
      fontSize: "var(--overline-font-size)",
      lineHeight: "var(--overline-line-height)",
    },
  })
);

// @types/tailwindcss.d.ts
declare module "*.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// Extending the module for custom class names
declare module "tailwindcss-classnames" {
  interface TailwindClassnames {
    "main-bg": {
      light: string;
      dark: string;
    };
    "main-border-color": {
      light: string;
      dark: string;
    };
    "main-button-color": {
      light: string;
      dark: string;
    };
    "secondary-bg": {
      light: string;
      dark: string;
    };
    "text-primary": {
      light: string;
      dark: string;
    };
    "text-secondary": {
      light: string;
      dark: string;
    };
  }
  const classNames: TailwindClassnames;
  export default classNames;
}

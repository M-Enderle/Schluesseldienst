import textsConfig from '../config/texts.json';

export type TextConfig = typeof textsConfig;

// Load the text configuration
export function getTexts(): TextConfig {
  return textsConfig;
}

// Helper function to get nested text values with type safety
export function getText(path: string): string {
  const keys = path.split('.');
  let current: any = textsConfig;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      console.warn(`Text path '${path}' not found in configuration`);
      return path; // Return the path as fallback
    }
  }
  
  return typeof current === 'string' ? current : '';
}

// Helper function to replace variables in text (e.g., {companyName})
export function replaceTextVariables(text: string, variables: Record<string, string> = {}): string {
  return text.replace(/\{(\w+)\}/g, (match, key) => {
    return variables[key] || match;
  });
}

export default textsConfig; 
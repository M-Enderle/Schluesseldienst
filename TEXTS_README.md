# Text Configuration System

This system allows you to easily create multiple versions of your website by centralizing all text content in JSON configuration files.

## 📁 File Structure

```
src/
├── config/
│   ├── texts.json              # Main configuration (Kaufbeuren)
│   ├── texts-munich.json       # Example for Munich
│   └── texts-[city].json       # Additional cities
├── utils/
│   └── textConfig.ts            # Utility functions
└── components/
    ├── Header.astro             # Original component
    ├── HeaderWithConfig.astro   # Example using config
    └── ...
```

## 🚀 Quick Start

### 1. Basic Usage in Components

```astro
---
// In any .astro component
import { getTexts } from '../utils/textConfig';

const texts = getTexts();
const hero = texts.hero;
const company = texts.company;
---

<h1>{hero.title}</h1>
<p>{hero.description}</p>
<a href={`tel:${company.phone}`}>{company.phone}</a>
```

### 2. Create New City Version

1. Copy `src/config/texts.json` to `src/config/texts-[city].json`
2. Update the relevant fields:
   - `company.name` → "Schlüsseldienst [City]"
   - `company.owner` → New owner name
   - `company.phone` → New phone number
   - `company.address` → New address
   - All city references in text content

### 3. Switch Configuration

Update `src/utils/textConfig.ts` to load different config:

```typescript
// For Munich version
import textsConfig from '../config/texts-munich.json';

// For Kaufbeuren version  
import textsConfig from '../config/texts.json';
```

## 📝 Configuration Structure

### Core Sections

| Section | Description | Key Fields |
|---------|-------------|------------|
| `meta` | Version info | `version`, `language`, `description` |
| `seo` | SEO metadata | `title`, `description`, `keywords` |
| `company` | Business info | `name`, `owner`, `phone`, `address` |
| `header` | Navigation | `logo`, `phoneLabel`, `callButton` |
| `hero` | Main banner | `title`, `subtitle`, `description` |
| `services` | Services section | `title`, `items[]`, `cta` |
| `quote` | Owner quote | `text`, `author` |
| `partners` | ADAC section | `title`, `features[]`, `cta` |
| `faq` | FAQ section | `items[]`, `contact` |
| `testimonials` | Reviews | `items[]`, `trustMetrics` |
| `footer` | Footer content | `company`, `contact`, `services`, `areas` |

### Special Sections

- `floatingButton` - Mobile call button
- `legalPages` - Impressum/Datenschutz metadata

## 🔧 Advanced Usage

### Environment-Based Configuration

```typescript
// textConfig.ts - Load based on environment
function getConfigFile(): string {
  const city = process.env.CITY || 'kaufbeuren';
  return `../config/texts${city !== 'kaufbeuren' ? `-${city}` : ''}.json`;
}

import textsConfig from getConfigFile();
```

### Text Variables

```typescript
import { replaceTextVariables } from '../utils/textConfig';

const text = "Herzlich willkommen bei {companyName}";
const result = replaceTextVariables(text, { 
  companyName: "Schlüsseldienst München" 
});
// Result: "Herzlich willkommen bei Schlüsseldienst München"
```

### Type Safety

The system includes TypeScript types:

```typescript
import type { TextConfig } from '../utils/textConfig';

// Full type checking for configuration
function processTexts(config: TextConfig) {
  // TypeScript will validate all properties
  console.log(config.company.name);
  console.log(config.hero.title);
}
```

## 🏙️ Creating New City Versions

### Essential Changes for Each City

1. **Company Information**
   ```json
   {
     "company": {
       "name": "Schlüsseldienst [City]",
       "owner": "[Owner Name]",
       "phone": "[Phone Number]",
       "address": {
         "city": "[City]",
         "fullAddress": "[Full Address]"
       },
       "serviceArea": "[City]"
     }
   }
   ```

2. **SEO Updates**
   ```json
   {
     "seo": {
       "title": "Schlüsseldienst [City] | 24h Notdienst",
       "description": "Schlüsseldienst [City] ✅ Schnell vor Ort...",
       "keywords": "Schlüsseldienst [City], Aufsperrdienst [City]..."
     }
   }
   ```

3. **Content Updates**
   - Replace all "Kaufbeuren" with new city name
   - Update service areas in footer
   - Customize testimonials with local names/areas
   - Update FAQ questions to reference new city

### Impressum & Datenschutz

Only update the company name and owner in `legalPages` section:

```json
{
  "legalPages": {
    "impressum": {
      "title": "Impressum - Schlüsseldienst [City] | [Owner]",
      "companyTitle": "Schlüsseldienst [City]"
    }
  }
}
```

## 📋 Migration Checklist

### Converting Existing Components

- [ ] Import `getTexts()` function
- [ ] Replace hardcoded strings with config values
- [ ] Update phone number references to use `company.phone`
- [ ] Replace company name with `company.name`
- [ ] Test component with different configurations

### Creating New City Version

- [ ] Copy base configuration file
- [ ] Update company information
- [ ] Replace all city references
- [ ] Update phone numbers and contact info
- [ ] Customize testimonials and local content
- [ ] Update service areas
- [ ] Test all pages and components
- [ ] Verify SEO metadata

## 🛠️ Utility Functions

### `getTexts()`
Returns the complete text configuration object.

### `getText(path: string)`
Gets nested text values with dot notation:
```typescript
getText('hero.title')          // Returns hero title
getText('company.phone')       // Returns phone number
getText('services.items.0.title') // Returns first service title
```

### `replaceTextVariables(text, variables)`
Replaces `{variable}` placeholders in text strings.

## 🎯 Benefits

1. **Easy Multi-City Scaling** - Create new versions by copying and editing JSON
2. **Centralized Content** - All text in one place, easy to maintain
3. **Type Safety** - TypeScript ensures configuration integrity
4. **SEO Optimization** - Consistent metadata management
5. **Quick Updates** - Change text without touching component code
6. **Translation Ready** - Structure supports future i18n implementation

## 🚨 Important Notes

- Always validate JSON syntax after editing configuration files
- Test thoroughly when switching between configurations
- Keep backup copies of working configurations
- Use consistent naming conventions for new city files
- Update both main content and legal pages when creating new versions

## 📞 Example: Converting a Component

**Before:**
```astro
<h1>Schlüsseldienst Kaufbeuren</h1>
<a href="tel:+491604996655">+49 1604 996655</a>
```

**After:**
```astro
---
import { getTexts } from '../utils/textConfig';
const texts = getTexts();
---

<h1>{texts.company.name}</h1>
<a href={`tel:${texts.company.phone}`}>{texts.company.phone}</a>
```

This approach makes your website incredibly flexible and maintainable! 
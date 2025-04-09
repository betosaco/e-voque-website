#!/bin/bash

# Search pattern
OLD_PATTERN="const params = await props.params;"$'\n'$'\n'"  // Get locale from params"$'\n'"  const localeParam = params.locale;"

# Replacement pattern
NEW_PATTERN="const locale = await props.params.locale;"

# Find all page files in the locale directory
find app/[locale]/ -name "page.tsx" -type f | while read -r file; do
  echo "Processing $file..."
  # Replace the pattern in each file
  sed -i '' "s/const params = await props.params;/const locale = await props.params.locale;/g" "$file"
  sed -i '' "s/const localeParam = params.locale;/const safeLocale = typeof locale === 'string' ? locale : 'en';/g" "$file"
  sed -i '' "s/const safeLocale = typeof localeParam/const safeLocale = typeof locale/g" "$file"
  
  echo "Updated $file"
done

echo "All files processed." 
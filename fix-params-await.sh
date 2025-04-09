#!/bin/bash

# Fix access pattern for locale
find app/[locale]/ -name "page.tsx" -type f | while read -r file; do
  echo "Processing $file..."
  
  # Fix the params access pattern
  sed -i '' 's/const locale = await props.params.locale;/const params = await props.params;\n  const locale = params.locale;/g' "$file"
  
  echo "Updated $file"
done

echo "All params access patterns fixed." 
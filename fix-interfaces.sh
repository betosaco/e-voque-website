#!/bin/bash

# Replace all PageProps interfaces with the correct one
find app/[locale]/ -name "page.tsx" -type f | while read -r file; do
  echo "Processing $file..."
  
  # First, let's fix the PageProps interface
  sed -i '' 's/interface PageProps {/interface PageProps {/g' "$file"
  sed -i '' 's/  params: { locale: string };/  params: Promise<{ locale: string }>;/g' "$file"
  
  # Second, fix any remaining safeLocale issues
  sed -i '' '/^  const locale = await props.params.locale;/!s/  const safeLocale = typeof locale/  const safeLocale = typeof locale/g' "$file"
  
  # Fix the about page error with missing safeLocale
  if [[ "$file" == *"about/page.tsx" ]]; then
    sed -i '' '/^  const locale = await props.params.locale;/a\
  const safeLocale = typeof locale === "string" ? locale : "en";' "$file"
  fi
  
  # Check for any page missing the safeLocale declaration
  if ! grep -q "safeLocale" "$file"; then
    sed -i '' '/^  const locale = await props.params.locale;/a\
  const safeLocale = typeof locale === "string" ? locale : "en";' "$file"
  fi
  
  echo "Updated $file"
done

echo "All interfaces and safeLocale declarations fixed." 
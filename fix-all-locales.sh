#!/bin/bash

# Fix for all locale pages
find app/[locale]/ -name "page.tsx" -type f | while read -r file; do
  echo "Processing $file..."
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  # Replace the params handling with the correct pattern
  cat "$file" | awk '
  BEGIN { fixed = 0; printed_first_locale = 0 }
  /const locale = await props.params.locale;/ { fixed = 1; printed_first_locale = 1; print; next }
  /const params = await props.params;/ { print "  const locale = await props.params.locale;"; fixed = 1; next }
  /const localeParam = params.locale;/ { next }
  /const safeLocale = typeof locale === / { 
    if (printed_first_locale == 0) {
      print; 
      printed_first_locale = 1;
    }
    next 
  }
  /const safeLocale = typeof localeParam/ { 
    if (printed_first_locale == 0) {
      print "  const safeLocale = typeof locale === \"string\" ? locale : \"en\";"; 
      printed_first_locale = 1;
    }
    next 
  }
  { print }
  ' > "$temp_file"
  
  # Replace the original file with the fixed content
  mv "$temp_file" "$file"
  
  echo "Updated $file"
done

echo "All files fixed." 
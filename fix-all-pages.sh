#!/bin/bash

# Fix all locale pages
find app/[locale]/ -name "page.tsx" -type f | while read -r file; do
  echo "Processing $file..."
  
  # Create a temporary file
  temp_file=$(mktemp)
  
  awk '
  /const params = await props.params;/ {
    print;
    print "  const locale = params.locale;";
    print "  ";
    print "  // Define safeLocale";
    print "  const safeLocale = typeof locale === \"string\" ? locale : \"en\";";
    print "  ";
    next;
  }
  /const locale = params.locale;/ { next }
  /\/\/ Get locale from params/ { next }
  /\/\/ This is needed since we can.*t use/ { next } 
  { print }
  ' "$file" > "$temp_file"
  
  # Replace the original file with the fixed content
  mv "$temp_file" "$file"
  
  echo "Updated $file"
done

echo "All pages fixed." 
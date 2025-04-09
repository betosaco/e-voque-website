#!/bin/bash

# Fix all locale pages with duplicate safeLocale declarations
find app/[locale]/ -name "page.tsx" -type f | while read -r file; do
  echo "Processing $file..."
  
  # Check for duplicate safeLocale
  if grep -c "const safeLocale" "$file" | grep -q "2"; then
    # Create a temporary file
    temp_file=$(mktemp)
    
    # Clean up the file to have only one safeLocale declaration
    awk '
    BEGIN { safe_locale_found = 0 }
    /const safeLocale = typeof locale/ { 
      if (safe_locale_found == 0) {
        print "  // Define safeLocale"; 
        print "  const safeLocale = typeof locale === \"string\" ? locale : \"en\";";
        safe_locale_found = 1;
        next;
      } else {
        next;
      }
    }
    /const safeLocale = locale/ {
      if (safe_locale_found == 0) {
        print "  // Define safeLocale"; 
        print "  const safeLocale = locale || \"en\";";
        safe_locale_found = 1;
        next;
      } else {
        next;
      }
    }
    { print }
    ' "$file" > "$temp_file"
    
    # Replace the original file with the fixed content
    mv "$temp_file" "$file"
    
    echo "Fixed duplicate safeLocale in $file"
  else
    echo "No duplicate found in $file"
  fi
done

echo "All pages fixed." 
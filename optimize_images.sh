find public/ -type f \( -iname "*.jpg" -o -iname "*.png" \) | while read file; do
  outfile="${file%.*}.webp"
  cwebp -q 80 "$file" -o "$outfile"
  echo "Converted: $file -> $outfile"
done

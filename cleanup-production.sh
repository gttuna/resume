#!/bin/bash
# Cleanup script for production server
# Run this from /var/www/thekylevenable.com/app/

echo "=== Cleaning up duplicate files from app root ==="

# Remove duplicate frontend files from root
echo "Removing duplicate frontend files..."
rm -rf dist/
rm -f index.html
rm -f package.json package-lock.json
rm -f eslint.config.js
rm -f tsconfig.*.json
rm -f vite.config.ts
rm -rf src/
rm -rf public/
rm -rf node_modules/
rm -f README.md

# Remove old archives and corrupted files
echo "Removing old archives and corrupted files..."
rm -f resume.tar.gz
rm -f '--exclude=node_modules'
rm -f 'frontend/--exclude=node_modules'

echo "=== Cleanup complete ==="
echo ""
echo "Next steps:"
echo "1. Update nginx config: /etc/nginx/conf.d/thekylevenable.com.conf"
echo "   Change: root /var/www/thekylevenable.com/app/dist;"
echo "   To:     root /var/www/thekylevenable.com/app/frontend/dist;"
echo ""
echo "2. Rebuild frontend:"
echo "   cd /var/www/thekylevenable.com/app/frontend"
echo "   npm install"
echo "   npm run build"
echo ""
echo "3. Reload nginx:"
echo "   sudo nginx -t"
echo "   sudo systemctl reload nginx"

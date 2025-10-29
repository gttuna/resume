#!/bin/bash
# Complete deployment script for production server
# Run this on your production server at /var/www/thekylevenable.com/app/

set -e  # Exit on error

echo "=== Production Deployment Script ==="
echo ""

# Step 1: Pull latest code
echo "Step 1: Pulling latest code from GitHub..."
git pull origin master
echo "✓ Code updated"
echo ""

# Step 2: Navigate to frontend and install dependencies
echo "Step 2: Installing dependencies..."
cd frontend
npm install
echo "✓ Dependencies installed"
echo ""

# Step 3: Build frontend for production
echo "Step 3: Building frontend for production..."
npm run build
echo "✓ Frontend built"
echo ""

# Step 4: Test nginx configuration
echo "Step 4: Testing nginx configuration..."
sudo nginx -t
echo "✓ Nginx config valid"
echo ""

# Step 5: Reload nginx
echo "Step 5: Reloading nginx..."
sudo systemctl reload nginx
echo "✓ Nginx reloaded"
echo ""

echo "=== Deployment Complete ==="
echo "Your site should now be live with the latest changes!"
echo "Visit: https://thekylevenable.com"
echo ""
echo "Note: Phone number will be hidden in production (visible only in dev mode)"

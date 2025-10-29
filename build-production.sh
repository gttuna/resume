#!/bin/bash
# Production build script
# Run this from the repository root to build the frontend for production

set -e  # Exit on error

echo "=== Building Frontend for Production ==="
echo ""

# Navigate to frontend directory
cd frontend

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo "✓ Dependencies installed"
    echo ""
fi

# Run production build
echo "Building frontend (production mode)..."
echo "  - TypeScript compilation"
echo "  - Vite production build"
echo "  - Phone number will be HIDDEN (import.meta.env.DEV = false)"
echo ""

npm run build:production

echo ""
echo "=== Build Complete ==="
echo "✓ Production build created at: frontend/dist/"
echo ""
echo "The build is ready for deployment with:"
echo "  - Minified assets"
echo "  - Optimized for production"
echo "  - Phone number hidden from public view"
echo ""
echo "To preview locally:"
echo "  cd frontend && npm run preview"
echo ""
echo "To deploy to production:"
echo "  1. Copy frontend/dist/ to your server"
echo "  2. Or run ./deploy-to-production.sh on server"

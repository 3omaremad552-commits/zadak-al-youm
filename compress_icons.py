from PIL import Image
from pathlib import Path

source = Path('/home/ubuntu/webdev-static-assets/islamic-quiz-icon.png')
assets = Path('/home/ubuntu/islamic-quiz-app/assets/images')
image = Image.open(source).convert('RGBA')
image.thumbnail((1024, 1024), Image.Resampling.LANCZOS)
for name in ['icon.png', 'splash-icon.png', 'favicon.png', 'android-icon-foreground.png']:
    target = assets / name
    image.save(target, format='PNG', optimize=True)

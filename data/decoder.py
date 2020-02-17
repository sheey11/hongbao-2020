from PIL import Image

def pixelColor(str):
    t = int(str)
    return (255 * t, 255 * t, 255 * t, 100)

def decode():
    with open('data.txt', 'r') as f:
        data = f.read()
    pixels = []
    for i in range(31):
        pixels.append(data[i * 31: (i + 1) * 31])

    img = Image.new("RGB", (31, 31))
    for i in range(31):
        for j in range(31):
            img.putpixel((i, j), pixelColor(pixels[i][j]))

    img.save("qrcode-decoded.png")
    print('Saved as qrcode-decoded.png')

decode()

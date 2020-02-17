from PIL import Image

img = Image.open('qrcode.png').load()

box_size = 260 / 31
data = ''

for i in range(0, 31):
    for j in range(0, 31):
        if img[int(i * box_size), int(j * box_size)][0] == 255:
            data += '1'
            print('1 ', end='')
        else:
            data += '0'
            print('0 ', end='')
    print()

with open('data.txt', 'w') as f:
    f.write(data)
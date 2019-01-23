with open('farmaci.txt') as infile:
    data = [l.strip() for l in infile]

json_start = 'var quote = ['
json_end = '];'
value = '"{}",'

print(json_start)
for farmaco in data:
    print(value.format(farmaco))
print(json_end)